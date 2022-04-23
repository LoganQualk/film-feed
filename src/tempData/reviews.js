let reviewData = (movieName, movieYr, moviePoster) => {
    return [
    {
        "id": "1",
        "user": "John Doe",
        "date": new Date("2/18/2018"),
        "attachedMovies": [
            {
                "name": movieName,
                "year": movieYr,
                "imageUrl": moviePoster,
            },
        ],
        "text": "Cinematic masterpiece. One of the most rewatchable movies ever.",
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
                "date": new Date("2/18/2018"), // replace with time/date replied,
                "text": "Not sure it's the rewatchable...",
                "replies": [
                    {
                        "user": "Bingo Boffman",
                        "date": new Date("2/20/2018"), // replace with time/date replied,
                        "text": "Considering the movie length, large emotional range the movie hits, and soundtrack I think it is too!",
                        "replies": [
                            {
                                "user": "Mary Jane",
                                "date": new Date("2/21/2018"), // replace with time/date replied,
                                "text": "I'm not so sure either. Not a big fan of the main actor's performance",
                                "replies": [
                                    {
                                        "user": "Bingo Boffman",
                                        "date": new Date("2/21/2018"), // replace with time/date replied,
                                        "text": "I thought the actor's performance was outstanding!",
                                        "replies": []
                                    }
                                ]
                            },
                            {
                                "user": "Jonah Babona",
                                "date": new Date("2/22/2018"), // replace with time/date replied,
                                "text": "Agreed.",
                                "replies": []
                            }
                        ]
                    }
                ]
            },
            {
                "user": "Jonah Babona",
                "date": new Date("3/24/2018"), // replace with time/date replied,
                "text": "Definitely! My mom agrees too",
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
        "date": new Date("6/9/2020"), // replace with date posted
        "attachedMovies": [
            {
                "name": movieName,
                "year": movieYr,
                "imageUrl": moviePoster,
            },
        ],
        "text": "Crazy plot twist!!!",
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
                "date": new Date("6/11/2020"), // replace with time/date replied,
                "text": "I personally thought it was a bit too predictable",
                "replies": [
                    {
                        "user": "Dwayne Johnson",
                        "date": new Date("6/13/2020"), // replace with time/date replied,
                        "text": "How so?",
                        "replies": [
                            {
                                "user": "Zach Braff",
                                "date": new Date("9/2/2020"), // replace with time/date replied,
                                "text": "So many movies have done similar plot twists...",
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
                                "date": new Date("2/1/2021"), // replace with time/date replied,
                                "text": "I didn't think it was predictable—totally threw me off track",
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
        "date": new Date("9/18/2021"), // replace with date posted
        "attachedMovies": [
            {
                "name": movieName,
                "year": movieYr,
                "imageUrl": moviePoster,
            },
        ],
        "text": "Childhood classic",
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
                "date": new Date("10/1/2021"), // replace with time/date replied,
                "text": "I watched this so many times as a kid too, brings me right back",
                "replies": [
                    {
                        "user": "Jason Momoa",
                        "date": new Date("11/11/2021"), // replace with time/date replied,
                        "text": "My parents wouldn't let me watch this, wish I got to watch it as a kid",
                        "replies": [
                            {
                                "user": "Zach Braff",
                                "date": new Date("12/13/2021"), // replace with time/date replied,
                                "text": "Me neither, but now I just got the DVD for it!",
                                "replies": []
                            },
                            {
                                "user": "Keanu Reeves",
                                "date": new Date("12/29/2021"), // replace with time/date replied,
                                "text": "Sad, at least you get to experience the glory now!",
                                "replies": []
                            }
                        ]
                    }
                ]
            },
            {
                "user": "Stevie Wonder",
                "date": new Date("1/1/2022"), // replace with time/date replied,
                "text": "So glad I read this...watched it after reading your review and I love the playfulness of this movie",
                "replies": []
            }
        ]
    }
    ];
};

export default reviewData;