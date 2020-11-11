function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const crimeCategories = ['violent-crime','robbery','arson','cyber','abuse','antisocial behaviour']
const getRandomCategory = () => {
    const i = randomIntFromInterval(0,crimeCategories.length-1)
    return crimeCategories[i]
}

const outcomeCategories = ['Unable to prosecute suspect','Prison','Community service']
const getRandomOutcomeCategory = () => {
    const i = randomIntFromInterval(0,outcomeCategories.length-1)
    return outcomeCategories[i]
}

export function getFakeCrimes() {
    const numberOfCrimes = randomIntFromInterval(10,80)

    const crimes = []

    for(let i=0; i < numberOfCrimes; i++) {
        crimes.push({
            id: Math.ceil(Math.random()*100000),
            category: getRandomCategory(),
            outcome_status: {
                category: getRandomOutcomeCategory(),
                date: '2017-02',
            }
        })
    }

    return crimes
}
