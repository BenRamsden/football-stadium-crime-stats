# football-stadium-crime-stats

This is a GraphQL backend combining 3 APIs

- [Football Stadium Data](https://www.football-data.org/documentation/api)
- [Postcode Lookup](https://postcodes.io/)
- [Crime Data by Location](https://data.police.uk/docs/method/crimes-at-location/)

## Issues

- Crime data api not working at time of development (status code 500), unable to test in integration with this api. Fake data is used instead.

## Run the demo

Tested with Node version 12.18.4

#### Run commands
```
npm install
npm run start:dev
```

#### Navigate to

[localhost:4000/graphql](http://localhost:4000/graphql)

#### Enter Sample Query

```
query stadiums {
  stadiums{
    id
    name
    address
    postcode
    latitude
    longitude
    crimes {
      id
      category
      outcome_status {
        category
        date
      }
    }
    crimesReport {
      category
      count
    }
  }
}
```
