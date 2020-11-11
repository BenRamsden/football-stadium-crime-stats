import {
    getStadiums
} from './crime'
import axios from 'axios'
import {
    crimeExpectedOutput,
    crimeResponse,
    footballExpectedOutput,
    footballResponse,
    postcodeExpectedOutput,
    postcodeResponse
} from "../../net/mocks";

jest.mock('axios')

describe('Crime Resolvers - Unit', () => {
    test('getStadiums', async () => {
        axios.mockReturnValueOnce(footballResponse)
        axios.mockReturnValueOnce(postcodeResponse)
        for(let i=0;i<footballResponse.data.teams.length;i++) {
            axios.mockReturnValueOnce(crimeResponse)
        }

        const res = await getStadiums()

        expect(res).toEqual(
            footballExpectedOutput.map((t,i) => ({
                ...t,
                ...postcodeExpectedOutput[i],
                crimes: crimeExpectedOutput,
                crimesReport: [
                    {
                        category: 'violent-crime',
                        count: 1,
                    }
                ]
            }))
        )
    })
})
