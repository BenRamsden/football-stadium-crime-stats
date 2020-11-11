/**
 * Network util to call postcode lookup api
 * Docs: https://postcodes.io/
 */

import axios from 'axios'

export async function getPostcodes(postcodes) {
    const response = await axios({
        method:'POST',
        url: 'http://api.postcodes.io/postcodes',
        data: {
            postcodes,
        }
    })

    return response.data.result
        //remove postcodes with no lat lng data
        .filter(({result}) => result!==null)
        .map(({query,result:{longitude,latitude}}) => ({
            postcode: query,
            longitude,
            latitude,
        }))
}
