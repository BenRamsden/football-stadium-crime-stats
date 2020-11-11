import { getCrimeData } from "./crime";
import axios from 'axios'

jest.mock('axios')

describe('crime integration', () => {

    test('get crime data', async () => {

        axios.mockReturnValueOnce({
            data: [
                {
                    "category": "violent-crime",
                    "location_type": "Force",
                    "location": {
                        "latitude": "52.643950",
                        "street": {
                            "id": 884227,
                            "name": "On or near Abbey Gate"
                        },
                        "longitude": "-1.143042"
                    },
                    "context": "",
                    "outcome_status": {
                        "category": "Unable to prosecute suspect",
                        "date": "2017-02"
                    },
                    "persistent_id": "4d83433f3117b3a4d2c80510c69ea188a145bd7e94f3e98924109e70333ff735",
                    "id": 54726925,
                    "location_subtype": "",
                    "month": "2017-02"
                }
            ]
        })

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
