import axios from 'axios'

export async function getPostcodes(postcodes) {
    const response = await axios({
        method:'POST',
        url: 'http://api.postcodes.io/postcodes',
        data: {
            postcodes,
        }
    })

    return response.data.result.map(({query,result:{longitude,latitude}}) => ({
        postcode: query,
        longitude,
        latitude,
    }))
}
