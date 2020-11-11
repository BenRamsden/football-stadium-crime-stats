import axios from 'axios'
import { match, toNormalised } from 'postcode'

export async function getTeams() {
    const footballDataApiKey = process.env.footballDataApiKey

    const teams = await axios({
        method: 'GET',
        headers: { 'X-Auth-Token': footballDataApiKey },
        url: 'http://api.football-data.org/v2/competitions/2021/teams',
    })

    return teams.data.teams.map(({id,name,address}) => ({
        id,
        name,
        address,
        postcode: match(address).map(toNormalised)[0]
    }))
}
