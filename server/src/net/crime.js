/**
 * Network util to call police crime API
 * Docs: https://data.police.uk/docs/method/crimes-at-location/
 */

import axios from 'axios'

//TODO: API Currently returning status 500, only validated in integration test
export async function getCrimeData(date,lat,lng) {
    const response = await axios({
        method: 'GET',
        url: `https://data.police.uk/api/crimes-at-location?date=${date}&lat=${lat}&lng=${lng}`
    })

    return response.data.map(({id,category,outcome_status}) => ({
        id,
        category,
        outcome_status
    }))
}
