import {getTeams} from "../../net/football-data";
import {getPostcodes} from "../../net/postcode";
import {getCrimeData} from "../../net/crime";
import {crimeExpectedOutput} from "../../net/mocks";
import {getFakeCrimes} from "../../helper/fake-crime";

export const getStadiums = async function () {
    const teams = await getTeams()

    const postcodes = await getPostcodes(teams.map(team => team.postcode))

    const teamsWithCoords = teams.map((t,i) => {
        const postcode = postcodes[i]

        if(postcode.postcode !== t.postcode) {
            throw new Error("teams postcodes index mismatch")
        }

        return {
            ...t,
            ...postcode,
        }
    })

    const teamsWithCrimes = await Promise.all(
        teamsWithCoords.map(async twc => {
            if(twc.latitude===undefined) {
                //Lat and lng could not be retrieved from postcode service
                return {
                    ...twc,
                    crimes: null,
                }
            }

            let crimes
            try {
                crimes = await getCrimeData('2017-2',twc.latitude,twc.longitude)
            } catch(error) {
                console.log("Error calling police api, using fake data",error.message)
                crimes = getFakeCrimes()
            }

            return {
                ...twc,
                crimes,
            }
        })
    )

    const teamsWithCrimesReport = teamsWithCrimes.map(twcr => {
        if(twcr.crimes===null) {
            return {
                ...twcr,
                report: null,
            }
        }

        const reportMap = twcr.crimes.reduce((acc,crime) => {
            if(acc.hasOwnProperty(crime.category)===false) {
                acc[crime.category] = 0
            }
            acc[crime.category] += 1
            return acc
        },{})

        const report = Object.entries(reportMap).map(([category,count]) => ({
            category,count,
        }))

        return {
            ...twcr,
            crimesReport: report,
        }
    })

    return teamsWithCrimesReport
}
