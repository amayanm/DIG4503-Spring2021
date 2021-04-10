import Express from 'express';
import CORS from 'cors';
import Database from './Database.js';

const App = Express();
const port = 45030;

App.use(Express.json());
App.use(CORS());

const db = new Database();
db.connect("lab11", "books");

//Database Buddy - createOne 
App.put("/books/:ISBN", async (req, res) => {
    const ISBN = req.params.ISBN;

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    const result = await db.createOne(ISBN, title, author, description);

    res.json(result);
});

//Database Buddy - readOne
App.get("/books/:ISBN", async (req, res) => {
    const ISBN = req.params.ISBN;

    const result = await db.readOne(ISBN, title, author, description);

    res.json(result);
});

//Database Buddy - readMany
App.post("/books/search", async (req, res) => {
    const ISBN = req.params.ISBN;

    const result = await db.find(ISBN, title, author, description);

    res.json({URLParameters: req.query}, result);
});

//Database Buddy - updateOne
App.patch("/books/:ISBN", async (req, res) => {
    const ISBN = req.params.ISBN;

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    const result = await db.updateOne(ISBN, title, author, description);

    res.json(result);
});

//Database Buddy - deleteOne
App.delete("/books/:ISBN", async (req, res) => {
    const ISBN = req.params.ISBN;

    const result = await db.deleteOne(ISBN);

    res.json(result);
});

App.listen(port, () => {
    console.log("Server is running!")
})


//testing: 
//ISBN- 9780143134770 
//Title- The Haunting of Hill House 
//Author- Shirley Jackson 
//Description- Horror book about 4 strangers who visit Hill House with Dr. Montague, to prove the house is haunted