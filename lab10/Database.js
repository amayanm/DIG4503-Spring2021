import MongoClient from 'mongodb';

const URL = "mongodb+srv://AmayaMorazan:zwsch6XSbTNpJbxY@cluster0.yuzwq.mongodb.net";

class Database{
    constructor(){
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect() {
        this.connection = await MongoClient.connect(URL, { useUnifiedTopology: true });
        this.database = this.connection.db("lab10");
        this.collection = this.database.collection("people");
    }

    async createOne() {
        //  if(this.collection != null) {
        //      return await this.collection.insertOne(person);
        //  }
       return await this.collection.insertOne({
            firstName: "Amaya",
            lastName: "Morazan",
            favoriteColor: "Orange",
        });
    }

    async readOne(){
        let result = {person: "not found"};
        if(this.collection != null){
            result = await this.collection.findOne({
                firstName: "Amaya",
                lastName: "Morazan",
                favoriteColor: "Orange",
            })
            return result
        }
    }

    close() {
        if(this.collection != null) {
          this.connection.close();
        }
      }

}

export default Database;