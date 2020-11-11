import {getTeams} from "./football-data";
import axios from 'axios'
import {footballExpectedOutput, footballResponse} from "./mocks";

jest.mock('axios')

describe('football-data integration', () => {

    beforeAll(() => {
        process.env.footballDataApiKey = '123'
    })

    test('data is returned', async () => {

        axios.mockReturnValueOnce(footballResponse)

        const teams = await getTeams()

        expect(axios).toHaveBeenCalledTimes(1)
        expect(axios.mock.calls[0][0].method).toEqual('GET')
        expect(axios.mock.calls[0][0].headers).toEqual({ 'X-Auth-Token':'123' })
        expect(axios.mock.calls[0][0].url).toEqual('http://api.football-data.org/v2/competitions/2021/teams')

        expect(teams).toEqual(footballExpectedOutput)

    })

})
