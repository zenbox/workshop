import response from 'express';

import {
    MongoClient,
    ObjectId
} from 'mongodb';

// Mongo Db Client and Dump (kind of)
const url = 'mongodb://docker:mongopw@localhost:55002'; // 55000
const RESET = true;
if (RESET) {
    await MongoClient.connect(url, (error, dbo) => {
        if (error) throw error;

        const database = dbo.db('blog'); // creates an new db if not exists!

        const data = [{
            "title": "First Lorem ipsum dolor sit",
            "content": "Lorem ipsum dolor sit ..."
        }, {
            "title": "Second Lorem ipsum dolor sit",
            "content": "Lorem ipsum dolor sit ..."
        }, {
            "title": "Third Lorem ipsum dolor sit",
            "content": "Lorem ipsum dolor sit ..."
        }, {
            "title": "Fouth Lorem ipsum dolor sit",
            "content": "Lorem ipsum dolor sit ..."
        }, {
            "title": "Fifth Lorem ipsum dolor sit",
            "content": "Lorem ipsum dolor sit ..."
        }];

        database
            .collection('posts')
            .insertMany(data, (error, resultset) => {
                if (error) throw error;

                console.log(resultset);
                console.log("Number of documents inserted: " + resultset.insertedCount);

                dbo.close();
            })
    });
}



// Methods
const getPosts = (request, response, next) => {
    // Get data from ...

    // Render data as response
    response
        .status(200)
        .render('posts', {
            "posts": [{
                "title": "First Post title",
                "content": "Lorem ipsum dolor sit ..."
            }, {
                "title": "Second Post title",
                "content": "Lorem ipsum dolor sit ..."
            }, {
                "title": "Third Post title",
                "content": "Lorem ipsum dolor sit ..."
            }]
        })

    return true;
}
const createPost = (request, response, next) => {
    return true;
}
const deletePost = (request, response, next) => {
    return true;
}
const putPost = (request, response, next) => {
    return true;
}
const getOptions = (request, response, next) => {
    return true;
}

export {
    getPosts,
    createPost,
    deletePost,
    putPost,
    getOptions
}