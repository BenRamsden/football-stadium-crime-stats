export const crimeResponse = {
    data: [
        {
            "category": "violent-crime",
            "location_type": "Force",
            "location": {
                "latitude": "52.643950",
                "street": {
                    "id": 884227,
                    "name": "On or near Abbey Gate"
                },
                "longitude": "-1.143042"
            },
            "context": "",
            "outcome_status": {
                "category": "Unable to prosecute suspect",
                "date": "2017-02"
            },
            "persistent_id": "4d83433f3117b3a4d2c80510c69ea188a145bd7e94f3e98924109e70333ff735",
            "id": 54726925,
            "location_subtype": "",
            "month": "2017-02"
        }
    ]
}

export const footballResponse = {
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
}

export const postcodeResponse = {
    data: {
        result: [
            {
                query:"OX49 5NU",
                result: {
                    latitude: 1,
                    longitude: 2,
                }
            },
            {
                query:"M32 0JG",
                result: {
                    latitude: 3,
                    longitude: 4,
                }
            },
            {
                query:"NE30 1DP",
                result: {
                    latitude: 5,
                    longitude: 6,
                }
            }
        ]
    }
}
