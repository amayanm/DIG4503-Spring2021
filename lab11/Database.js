import MongoClient from 'mongodb';

const URL = "mongodb+srv://AmayaMorazan:zwsch6XSbTNpJbxY@cluster0.yuzwq.mongodb.net";

class Database {
    constructor(){
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect(database, collection) {
        this.connection = await MongoClient.connect(URL, {useUnifiedTopology: true});
        this.database = this.connection.db(database);
        this.collection = this.database.collection(collection);
    }

    createOne(){
        if(this.collection != null){
            const result = this.collection.insertOne({"ISBN": "9780143134770", "title": "The Haunting of Hill House", "author": "Shirley Jackson", "description": "Horror book about 4 strangers who visit Hill House with Dr. Montague, to prove the house is haunted"});
            return (result);
        } else{
            return {"Sorry, could not add book": 0}
        }
    }

    async readOne(ISBN){
        if(this.collection != null){
            const result = await this.collection.findOne({"ISBN": ISBN, "title": title, "author": author, "description": description});
            return {"title": title, "author": author, "description": description};
        } else{
            return {book: "not found"}
        }
    }

    readMany(ISBN){
        if(this.collection != null){
            const result = this.collection.find({"ISBN": ISBN});
            return {"title": title, "author": author, "description": description};
        }
    }

    async updateOne(ISBN, title, author, description){
        if(this.collection != null){
            const result = await this.collection.updateOne({"ISBN": ISBN}, {$set: {"title": title, "author": author, "description": description} } );
            return {"title": title, "author": author, "description": description};
        } else{
            return {"Sorry, books not updated": 0};
        }
    }

    async deleteOne(ISBN){
        if(this.collection != null){
            const result = await this.collection.deleteOne({"ISBN": ISBN});
            return {"deleted": result.deletedCount};
        } else{
            return {"deleted": 0};
        }
    }
    
    close(){
        if(this.collection != null) {
            this.connection.close();
        }
    }
}

export default Database;