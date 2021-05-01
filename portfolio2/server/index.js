import Express from 'express';
import CORS from 'cors';
import Database from './Database.js';

const App = Express();
const port = 45030;

App.use(Express.json());
App.use(CORS());

const db = new Database();
const datab = new Database();
db.connect("portfolio2", "AmayaMorazan");
datab.connect("sample_mflix", "movies");


//Database Buddy - createOne -creating a movie
App.put("/movie/:title", async (req, res) => {
    const title = req.params.title;

    const year = req.body.year;
    const plot = req.body.plot;

    const result = await db.createOne(title, year, plot);

    res.json(result);
});

//Database Buddy - readOne -getting/searching the movies
App.get("/movie/:title", async (req, res) => {
    const title = req.params.title;

    const result = await datab.readOne(title);

    res.json(result);
});

//Databse Budy - updateOne -updating movie
App.patch("/movie/:title", async (req, res) => {
    const title = req.params.title;

    const year = req.body.year;
    const plot = req.body.plot;

    const result = await db.updateOne(title, year, plot);

    res.json(result);
});

//Database Buddy - deleteOne -deleting movie
App.delete("/movie/:title", async (req, res) => {
    const title = req.params.title;

    const result = await db.deleteOne(title);

    res.json(result);
});

App.listen(port, () => {
    console.log("Ze server is runningg! YAYY")
})
