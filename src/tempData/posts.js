const postData = [
    {
        "id": "1",
        "user": "John Doe",
        "date": new Date(), // replace with date posted
        "attachedMovies": [
            {
                "name": "The Dark Knightiasldkfhjalksj",
                "year": 2008,
                "imageUrl": "https://m.media-amazon.com/images/I/61zBUhQj22L._AC_SY679_.jpg"
            },
            {
                "name": "The Dark Noot",
                "year": 2008,
                "imageUrl": "https://m.media-amazon.com/images/I/61zBUhQj22L._AC_SY679_.jpg"
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
    }
]

export default postData;