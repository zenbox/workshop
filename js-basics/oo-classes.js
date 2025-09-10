// Classes and Object Orientation

// Class

class Sheeps {
    constructor(dbPath) {
        this.dbPath = dbPath;
    }

    getDatabase() {}

    getAllSheeps() {
        this.allSheeps = 5;
    }

    createSheep() {}
    updateSheep() {}
    deleteSheep() {}
}

// in route
// instanciate an runtime object
const dbPath = "./src/model/database.db";
const sheepsController = new Sheeps(dbPath);

sheepsController.createSheep();
console.log(sheeps.dbPath); // ./src/model/database.db

sheeps.getAllSheeps();
console.log(sheeps.allSheeps);
