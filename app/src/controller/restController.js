import response from 'express';

import {
    MongoClient,
    ObjectId
} from 'mongodb';

// Mongo Db Client and Dump (kind of)
const url = 'mongodb://docker:mongopw@localhost:55002'; // 55000
const RESET = false;
if (RESET) {
    await MongoClient.connect(url, (error, dbo) => {
        if (error) throw error;

        const database = dbo.db('blog'); // creates an new db if not exists!

        const data = [{
            "title": "First Lorem ipsum dolor sit",
            "content": "Lorem ipsum dolor sit ...",
            "type": "post"
        }, {
            "title": "Second Lorem ipsum dolor sit",
            "content": "Lorem ipsum dolor sit ...",
            "type": "post"
        }, {
            "title": "Third Lorem ipsum dolor sit",
            "content": "Lorem ipsum dolor sit ...",
            "type": "post"
        }, {
            "title": "Fouth Lorem ipsum dolor sit",
            "content": "Lorem ipsum dolor sit ...",
            "type": "post"
        }, {
            "title": "Fifth Lorem ipsum dolor sit",
            "content": "Lorem ipsum dolor sit ...",
            "type": "post"
        }];

        database
            .collection('posts')
            .insertMany(data, (error, resultset) => {
                if (error) throw error;

                // console.log(resultset);
                console.log("Number of documents inserted: " + resultset.insertedCount);

                dbo.close();
            })
    });
}



// Methods
const getPosts = async (request, response, next) => {
    // Get data from ...
    await MongoClient.connect(url, (error, dbo) => {
        if (error) throw error;

        const database = dbo.db('blog');

        let query = {
            "type": "post"
        };

        database
            .collection('posts')
            .find(query)
            .toArray((error, resultset) => {
                if (error) throw error;
                // console.log(resultset);
                response
                    .status(200)
                    .render('posts', {
                        posts: resultset
                    });
            })
    });
    // Render data as response
    // response
    //     .status(200)
    //     .render('posts', {
    //         "posts": [{
    //             "title": "First Post title",
    //             "content": "Lorem ipsum dolor sit ..."
    //         }, {
    //             "title": "Second Post title",
    //             "content": "Lorem ipsum dolor sit ..."
    //         }, {
    //             "title": "Third Post title",
    //             "content": "Lorem ipsum dolor sit ..."
    //         }]
    //     })

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