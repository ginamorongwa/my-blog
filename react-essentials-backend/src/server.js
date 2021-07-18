import bodyParser from "body-parser";
import path from "path";
const express = require("express");
const {MongoClient} = require("mongodb");

const app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json());

const withDB = async (operations, res) => {
    try{
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('my-blog');

        await operations(db);

        client.close();
    }
    catch(error){
        res.status(500).json({ message: 'Error connecting to db', error})
    }
}

app.get('/api/article/:name', async (req, res) => {
    withDB(async (db) =>{
        const articleName = req.params.name;

        const articleInfo = await db.collection('article').findOne({name: articleName});
        res.status(200).json(articleInfo);

        client.close();
    }, res);
})

app.post('/api/article/:name/upvote', async (req, res) => {
    withDB(async (db) =>{
        const articleName = req.params.name;

        const articleInfo = await db.collection('article').findOne({name: articleName});
        await db.collection('article').updateOne({name: articleName}, {
            '$set': {
                upvotes: articleInfo.upvotes + 1,
            }
        });

        const UpdatedArticleInfo = await db.collection('article').findOne({name: articleName});

        res.status(200).json(UpdatedArticleInfo);
    }, res);
})

app.post('/api/article/:name/add-comment', (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    withDB(async (db) => {
        const articleInfo = await db.collection('article').findOne({name: articleName});
        await db.collection('article').updateOne({name: articleName}, {
            '$set': {
                comments: articleInfo.comments.concat({username, text}),
            }
        });

        const UpdatedArticleInfo = await db.collection('article').findOne({name: articleName});

        res.status(200).json(UpdatedArticleInfo);
    }, res);

} );

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.listen(8000, () => console.log('Listening on port 8000'));



// app.get('/api/articles/:name', async (req, res) => {
//     try{
//         const articleName = req.params.name;
        
//         const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
//         const db = client.db('my-blog');

//         const articleInfo = await db.collection('article').findOne({name: articleName});
//         res.status(200).json(articleInfo);

//         client.close();
//     }
//     catch(error){
//         res.status(500).json({ message: 'Error connecting to db', error})
//     }
// })



// app.post('/api/articles/:name/upvote', async (req, res) => {
//     try{
//         const articleName = req.params.name;

//         const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
//         const db = client.db('my-blog');

//         const articleInfo = await db.collection('article').findOne({name: articleName});
//         await db.collection('article').updateOne({name: articleName}, {
//             '$set': {
//                 upvotes: articleInfo.upvotes + 1,
//             }
//         });

//         const UpdatedArticleInfo = await db.collection('article').findOne({name: articleName});

//         res.status(200).json(UpdatedArticleInfo);

//         client.close();
//     }
//     catch(error){
//         res.status(500).json({ message: 'Error connecting to db', error})
//     }
//     // articlesInfo[articleName].upvotes += 1;
//     // res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`)
// } )

// app.post('/api/articles/:name/add-comment', (req, res) => {
//     const { username, text } = req.body;
//     const articleName = req.params.name;

//     articlesInfo[articleName].comments.push({ username, text });

//     res.status(200).send(articlesInfo[articleName]);
// } )

// app.get('/hello', (req, res) => res.send('Hello!'));
// app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`));
// app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}`));











