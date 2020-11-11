import { getPostcodes } from "./postcode";
import axios from 'axios'

jest.mock('axios')

describe('postcodes integration', () => {

    test('get postcodes', async () => {

        axios.mockReturnValueOnce({
            data: {
                result: [
                    {
                        query:"OX49 5NU",
                        result: {
                            latitude: 1,
                            longitude: 2,
                        }
                    },
                    {
                        query:"M32 0JG",
                        result: {
                            latitude: 3,
                            longitude: 4,
                        }
                    },
                    {
                        query:"NE30 1DP",
                        result: {
                            latitude: 5,
                            longitude: 6,
                        }
                    }
                ]
            }
        })

        const postcodes = await getPostcodes(["OX49 5NU", "M32 0JG", "NE30 1DP"])

        expect(postcodes).toEqual([
            {
                postcode:"OX49 5NU",
                latitude:1,
                longitude:2,
            },
            {
                postcode:"M32 0JG",
                latitude:3,
                longitude:4,
            },
            {
                postcode:"NE30 1DP",
                latitude:5,
                longitude:6,
            }
        ])

    })

})
