/*
https://randomuser.me/api/
*/

type RandomUser = {
    "results": {
        "gender": string
        "name": {
            "title": string
            "first": string
            "last": string
        }
        "location": {
            "street": {
                "number": number
                "name": string
            },
            "city": string
            "state": string
            "country": string
            "postcode": number
            "coordinates": {
                "latitude": string
                "longitude": string
            },
            "timezone": {
                "offset": string
                "description": string
            }
        }
        "email": string
        "login": {
            "uuid": string
            "username": string
            "password": string
            "salt": string
            "md5": string
            "sha1": string
            "sha256": string
        }
        "dob": {
            "date": string
            "age": number
        }
        "registered": {
            "date": string
            "age": number
        }
        "phone": string
        "cell": string
        "id": {
            "name": string
            "value": string
        }
        "picture": {
            "large": string
            "medium": string
            "thumbnail": string
        }
        "nat": string
    }[]
    "info": {
        "seed": string
        "results": number
        "page": number
        "version": string
    }
}

const randomUser: RandomUser = {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Branko",
                "last": "Schöler"
            },
            "location": {
                "street": {
                    "number": 1177,
                    "name": "Mittelweg"
                },
                "city": "Zierenberg",
                "state": "Thüringen",
                "country": "Germany",
                "postcode": 34001,
                "coordinates": {
                    "latitude": "-54.2284",
                    "longitude": "-66.3618"
                },
                "timezone": {
                    "offset": "+2:00",
                    "description": "Kaliningrad, South Africa"
                }
            },
            "email": "branko.scholer@example.com",
            "login": {
                "uuid": "1c81aff4-f471-41af-9150-2c8b777528c5",
                "username": "goldenbear266",
                "password": "ashleigh",
                "salt": "9qDfhO9w",
                "md5": "0f2b0cde20a6f07b369da766313c3d8c",
                "sha1": "1d47038c4024c5f075f98cb67e734207fc87eab3",
                "sha256": "8395953de73ec9dc28cb0dbaef6c333f64c1b784354bd4b2596750accb097173"
            },
            "dob": {
                "date": "1990-08-11T14:50:59.413Z",
                "age": 33
            },
            "registered": {
                "date": "2013-01-16T18:55:20.971Z",
                "age": 10
            },
            "phone": "0444-3157397",
            "cell": "0178-6287108",
            "id": {
                "name": "SVNR",
                "value": "89 110890 S 260"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/74.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
            },
            "nat": "DE"
        }
    ],
    "info": {
        "seed": "c100106ab30bb795",
        "results": 1,
        "page": 1,
        "version": "1.4"
    }
}