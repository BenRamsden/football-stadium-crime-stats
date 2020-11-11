import {
    getStadiums
} from './crime'
import axios from 'axios'
import {crimeResponse, footballResponse, postcodeResponse} from "../../net/mocks";

jest.mock('axios')

describe('Crime Resolvers - Unit', () => {
    test('getStadiums', async () => {
        axios.mockReturnValueOnce(footballResponse)
        axios.mockReturnValueOnce(postcodeResponse)
        axios.mockReturnValueOnce(crimeResponse)

        const res = await getStadiums()

        expect(res).toEqual([])
    })
})
