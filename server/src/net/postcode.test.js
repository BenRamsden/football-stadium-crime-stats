import { getPostcodes } from "./postcode";
import axios from 'axios'
import {postcodeExpectedOutput, postcodeResponse} from "./mocks";

jest.mock('axios')

describe('postcodes integration', () => {

    test('get postcodes', async () => {

        axios.mockReturnValueOnce(postcodeResponse)

        const postcodes = await getPostcodes(["N5 1BU", "L4 OTH", "N17 OAP", "B71 4LF"])

        expect(postcodes).toEqual(postcodeExpectedOutput)

    })

})
