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
                    {
                        id:57,
                        name:"Arsenal FC",
                        address:"75 Drayton Park London N5 1BU"
                    },
                    {
                        id: 64,
                        name: 'Liverpool FC',
                        address: 'Anfield Road Liverpool L4 OTH',
                    },
                    {
                        id: 73,
                        name: 'Tottenham Hotspur FC',
                        address: 'Bill Nicholson Way, 748 High Road London N17 OAP',
                    },
                    {
                        id: 74,
                        name: 'West Bromwich Albion FC',
                        address: 'The Hawthorns West Bromwich B71 4LF',
                    },
                ]
            }
        })

        const teams = await getTeams()

        expect(axios).toHaveBeenCalledTimes(1)
        expect(axios.mock.calls[0][0].method).toEqual('GET')
        expect(axios.mock.calls[0][0].headers).toEqual({ 'X-Auth-Token':'123' })
        expect(axios.mock.calls[0][0].url).toEqual('http://api.football-data.org/v2/competitions/2021/teams')

        expect(teams).toEqual([
            {
                id:57,
                name:"Arsenal FC",
                address:"75 Drayton Park London N5 1BU",
                postcode: "N5 1BU"
            },
            {
                id: 64,
                name: 'Liverpool FC',
                address: 'Anfield Road Liverpool L4 OTH',
                postcode:'L4 OTH',
            },
            {
                id: 73,
                name: 'Tottenham Hotspur FC',
                address: 'Bill Nicholson Way, 748 High Road London N17 OAP',
                postcode:'N17 OAP',
            },
            {
                id: 74,
                name: 'West Bromwich Albion FC',
                address: 'The Hawthorns West Bromwich B71 4LF',
                postcode:'B71 4LF',
            },
        ])

    })

})
