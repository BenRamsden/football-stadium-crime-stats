import { getCrimeData } from "./crime";
import axios from 'axios'
import {crimeExpectedOutput, crimeResponse} from "./mocks";

jest.mock('axios')

describe('crime integration', () => {

    test('get crime data', async () => {

        axios.mockReturnValueOnce(crimeResponse)

        const data = await getCrimeData('2017-02','52.629729','-1.131592')

        expect(data).toEqual(crimeExpectedOutput)

    })

})
