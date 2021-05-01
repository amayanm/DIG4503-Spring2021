import MongoClient from 'mongodb';

const URL = "mongodb+srv://AmayaMorazan:zwsch6XSbTNpJbxY@cluster0.yuzwq.mongodb.net";

class Database {
    constructor(){
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect(database, collection){
        this.connection = await MongoClient.connect(URL, {useUnifiedTopology: true});
        this.database = this.connection.db(database);
        this.collection = this.database.collection(collection);
    }

    createOne(title, year, plot){
        if(this.collection != null){
            const result = this.collection.insertOne({"title": title, "year": year, "plot": plot});
            return (result);
        } else{
            return {"Sorry, could not add movie": 0}
        }
    }

    async readOne(title){
        if(this.collection != null){
            const result = await this.collection.findOne({"title": title});
            return (result);
        } else{
            return {movie: "not found"}
        }
    }

    async updateOne(title, year, plot){
        if(this.collection != null){
            const result = await this.collection.updateOne({"title": title}, {$set: {"year": year, "plot": plot}});
            return {result};
        } else{
            return {"Sorry, movies not updated": 0};
        }
    }

    async deleteOne(title){
        if(this.collection != null){
            const result = await this.collection.deleteOne({"title": title});
            return {"deleted": result.deletedCount};
        } else{
            return {"deleted": 0};
        }
    }

    close(){
        if(this.collection != null){
            this.connection.close();
        }
    }
}

export default Database;