import { getCrimeData } from "./crime";
import axios from 'axios'
import {crimeResponse} from "./mocks";

jest.mock('axios')

describe('crime integration', () => {

    test('get crime data', async () => {

        axios.mockReturnValueOnce(crimeResponse)

        const data = await getCrimeData('2017-02','52.629729','-1.131592')

        expect(data).toEqual([
            {
                "id": 54726925,
                "category": "violent-crime",
                "outcome_status": {
                    "category": "Unable to prosecute suspect",
                    "date": "2017-02"
                },
            }
        ])

    })

})
