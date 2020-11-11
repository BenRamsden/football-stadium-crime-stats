# football-stadium-crime-stats

## Example Query

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
  }
}
```
