const postData = [
    {
        "id": "1",
        "user": "John Doe",
        "date": new Date(), // replace with date posted
        "attachedMovies": [
            {
                "name": "The Dark Knight",
                "id": "197834",
                "tmdbId": 155,
                "year": 2008,
                "imageUrl": "https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg"
            },
            {
                "name": "The Dark Knight Rises",
                "id": "9834756",
                "tmdbId": 49026,
                "year": 2012,
                "imageUrl": "https://image.tmdb.org/t/p/original//85cWkCVftiVs0BVey6pxX8uNmLt.jpg"
            }
        ],
        "text": "Which of these movies is yall's favorite?  I just watched both and I think I prefer The Dark Knight.",
        "reactions": {
            "heart": 52,
            "laugh": 12,
            "cry": 2,
            "surprise": 4,
            "clap": 32,
            "thumbsDown": 6
        },
        "replies": [ // using wording "replies" since I think it makes more sense in a nested JSON context, but can replace with comments if necessary
            {
                "user": "Mary Jane",
                "date": new Date(), // replace with time/date replied,
                "text": "Good comment",
                "replies": [
                    {
                        "user": "Bingo Boffman",
                        "date": new Date(), // replace with time/date replied,
                        "text": "Great comment",
                        "replies": [
                            {
                                "user": "Mary Jane",
                                "date": new Date(), // replace with time/date replied,
                                "text": "Good comment",
                                "replies": [
                                    {
                                        "user": "Bingo Boffman",
                                        "date": new Date(), // replace with time/date replied,
                                        "text": "Great comment",
                                        "replies": []
                                    }
                                ]
                            },
                            {
                                "user": "Jonah Babona",
                                "date": new Date(), // replace with time/date replied,
                                "text": "Incredible comment",
                                "replies": []
                            }
                        ]
                    }
                ]
            },
            {
                "user": "Jonah Babona",
                "date": new Date(), // replace with time/date replied,
                "text": "Incredible comment",
                "replies": [{
                    "user": "Jonah Babona",
                    "date": new Date(), // replace with time/date replied,
                    "text": "Incredible comment",
                    "replies": []
                }]
            }
        ]
    },
    {
        "id": "2",
        "user": "Jason Momoa",
        "date": new Date(), // replace with date posted
        "attachedMovies": [
            {
                "name": "Aquaman",
                "id": "893475",
                "tmdbId": 297802,
                "year": 2018,
                "imageUrl": "https://image.tmdb.org/t/p/original//xLPffWMhMj1l50ND3KchMjYoKmE.jpg"
            }
        ],
        "text": "I don't know who this Jason Momoa guy is... But he is a fantastic actor!",
        "reactions": {
            "heart": 72,
            "laugh": 81,
            "cry": 1,
            "surprise": 18,
            "clap": 51,
            "thumbsDown": 3
        },
        "replies": [ // using wording "replies" since I think it makes more sense in a nested JSON context, but can replace with comments if necessary
            {
                "user": "John Stamos",
                "date": new Date(), // replace with time/date replied,
                "text": "Stunning piece of work.",
                "replies": [
                    {
                        "user": "Dwayne Johnson",
                        "date": new Date(), // replace with time/date replied,
                        "text": "I would've been better here.",
                        "replies": [
                            {
                                "user": "Zach Braff",
                                "date": new Date(), // replace with time/date replied,
                                "text": "Oh my god, I LOVE DWAYNE JOHNSON!!!",
                                "replies": [
                                    {
                                        "user": "Roy Williams",
                                        "date": new Date(), // replace with time/date replied,
                                        "text": "I personally enjoy Jason Momoa more.",
                                        "replies": []
                                    }
                                ]
                            },
                            {
                                "user": "Jonah Hill",
                                "date": new Date(), // replace with time/date replied,
                                "text": "So many famous people here.",
                                "replies": []
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        "id": "3",
        "user": "Dwayne Johnson",
        "date": new Date(), // replace with date posted
        "attachedMovies": [
            {
                "name": "The Wiggles",
                "id": "89234567",
                "tmdbId": 40750,
                "year": 1997,
                "imageUrl": "https://image.tmdb.org/t/p/original//sobDkes6RibkRoX7tnGgXKQ8kyh.jpg"
            }
        ],
        "text": "You guys remember this movie? I absolute adore it.",
        "reactions": {
            "heart": 41,
            "laugh": 5,
            "cry": 2,
            "surprise": 2,
            "clap": 36,
            "thumbsDown": 11
        },
        "replies": [ // using wording "replies" since I think it makes more sense in a nested JSON context, but can replace with comments if necessary
            {
                "user": "John Stamos",
                "date": new Date(), // replace with time/date replied,
                "text": "Stunning piece of work.",
                "replies": [
                    {
                        "user": "Jason Momoa",
                        "date": new Date(), // replace with time/date replied,
                        "text": "I would've been better here.",
                        "replies": [
                            {
                                "user": "Zach Braff",
                                "date": new Date(), // replace with time/date replied,
                                "text": "Oh my god, I LOVE DWAYNE JOHNSON!!!",
                                "replies": []
                            },
                            {
                                "user": "Keanu Reeves",
                                "date": new Date(), // replace with time/date replied,
                                "text": "I prefer the new Wiggles",
                                "replies": []
                            }
                        ]
                    }
                ]
            },
            {
                "user": "Stevie Wonder",
                "date": new Date(), // replace with time/date replied,
                "text": "Hmmmm... Haven't seen it.",
                "replies": []
            }
        ]
    }
]

export default postData;