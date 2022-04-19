const postData = [
    {
        "id": "1",
        "user": "John Doe",
        "date": new Date(), // replace with date posted
        "attachedMovies": [
            {
                "name": "The Dark Knight",
                "year": 2008,
                "imageUrl": "https://m.media-amazon.com/images/I/61zBUhQj22L._AC_SY679_.jpg"
            },
            {
                "name": "The Dark Knight Rises",
                "year": 2012,
                "imageUrl": "https://i.ytimg.com/vi/H1JAeBT2FJ0/movieposter_en.jpg"
            }
        ],
        "text": "Which of these movies is yall's favorite?  I just watched both and I think I prefer The Dark Knight.",
        "reactions": {
            "heart": Math.floor(Math.random()*100),
            "laugh": Math.floor(Math.random()*100),
            "cry": Math.floor(Math.random()*100),
            "surprise": Math.floor(Math.random()*100),
            "clap": Math.floor(Math.random()*100),
            "thumbsDown": Math.floor(Math.random()*100)
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
                "year": 2018,
                "imageUrl": "https://pbs.twimg.com/media/Dsdlbj3U4AAJoO7.jpg"
            }
        ],
        "text": "I don't know who this Jason Momoa guy is... But he is a fantastic actor!",
        "reactions": {
            "heart": Math.floor(Math.random()*100),
            "laugh": Math.floor(Math.random()*100),
            "cry": Math.floor(Math.random()*100),
            "surprise": Math.floor(Math.random()*100),
            "clap": Math.floor(Math.random()*100),
            "thumbsDown": Math.floor(Math.random()*100)
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
                "year": 1997,
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBdCstjMJFV5KBjjPAAaV_DSbXLg6UnhKFD0XVlaZD1qSMGzD0"
            }
        ],
        "text": "You guys remember this movie? I absolute adore it.",
        "reactions": {
            "heart": Math.floor(Math.random()*100),
            "laugh": Math.floor(Math.random()*100),
            "cry": Math.floor(Math.random()*100),
            "surprise": Math.floor(Math.random()*100),
            "clap": Math.floor(Math.random()*100),
            "thumbsDown": Math.floor(Math.random()*100)
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