import {
    getStadiums
} from './crime'

describe('Crime Resolvers - Unit', () => {
    test('getStadiums', async () => {
        const res = await getStadiums()

        expect(res).toEqual([])
    })
})
