import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45030;

const d = new Database();

App.use(Express.json());

App.put("/people/create", (req, res) => {
    let person = req.body.person;

    d.createOne(person);
    
    res.json(
        {
            person: person,
            body: req.body
        }
    );
});

App.get("/people/:person", (req, res) => {
    let person = req.params.person;
    let result = {person: "not found"};

    d.readOne(person);

    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
});