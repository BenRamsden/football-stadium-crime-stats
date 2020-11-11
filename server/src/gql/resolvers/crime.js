import {getTeams} from "../../net/football-data";
import {getPostcodes} from "../../net/postcode";
import {getCrimeData} from "../../net/crime";

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

            const crimes = await getCrimeData('2017-2',twc.latitude,twc.longitude)

            return {
                ...twc,
                crimes,
            }
        })
    )

    return teamsWithCrimes
}
