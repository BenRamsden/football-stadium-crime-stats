/**
 * Network util to call football-data api
 * Docs: https://www.football-data.org/documentation/quickstart
 */

import axios from 'axios'

export async function getTeams() {
    const footballDataApiKey = process.env.footballDataApiKey

    const response = await axios({
        method: 'GET',
        headers: { 'X-Auth-Token': footballDataApiKey },
        url: 'http://api.football-data.org/v2/competitions/2021/teams',
    })

    return response.data.teams.map(({id,name,address}) => ({
        id,
        name,
        address,
        //regex wasn't working, take last 2 words from address sentence
        postcode: address.split(" ").slice(-2).join(" ")
    }))
}
