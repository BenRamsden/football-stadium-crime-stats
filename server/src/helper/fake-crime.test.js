import {getFakeCrimes} from "./fake-crime";

describe('Crime generator', () => {

    it('generates crime', () => {

        const crimes = getFakeCrimes()

        expect(crimes.length).toBeGreaterThan(9)
        expect(crimes.length).toBeLessThan(81)

        crimes.forEach(crime => {
            expect(crime.id).toBeDefined()
            expect(crime.category).toBeDefined()
            expect(crime.outcome_status.category).toBeDefined()
            expect(crime.outcome_status.date).toBeDefined()
        })

    })

})
