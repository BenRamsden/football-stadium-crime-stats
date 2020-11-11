import {getTeams} from "./football-data";
import axios from 'axios'

jest.mock('axios')

describe('football-data integration', () => {

    beforeAll(() => {
        process.env.footballDataApiKey = '123'
    })

    test('data is returned', async () => {

        axios.mockReturnValueOnce({
            data: {
                teams: [
                    {"id":57,"name":"Arsenal FC","address":"75 Drayton Park London N5 1BU"},
                ]
            }
        })

        const teams = await getTeams()

        expect(axios).toHaveBeenCalledTimes(1)
        expect(axios.mock.calls[0][0].method).toEqual('GET')
        expect(axios.mock.calls[0][0].headers).toEqual({ 'X-Auth-Token':'123' })
        expect(axios.mock.calls[0][0].url).toEqual('http://api.football-data.org/v2/competitions/2021/teams')

        expect(teams).toEqual([
            {"id":57,"name":"Arsenal FC","address":"75 Drayton Park London N5 1BU","postcode":"N5 1BU"}
        ])

    })

})
