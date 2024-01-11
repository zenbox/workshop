

// Klassen fassen Funktionen zusammen!
class SheepsController { 

    constructor() { }

    // ReST GET
    selectAllSheeps(request, respon, next) { 
        console.log("selectAllSheeps");
        return true;
    }
    
    
    // ReST GET
    selectSheepById(request, response, next) { 
        console.log("selectSheepById");
        return true;
    }


    // ReST POST
    insertSheep(request, response, next) { 
        console.log("insertSheep");
        return true;
    }

    // Rest PUT/PATCH
    updateSheep(request, response, next) { 
        console.log("updateSheep");
        return true;
    }

    // Rest DELETE
    deleteSheep(request, response, next) { 
        console.log("deleteSheep");
        return true;
    }

}

export default SheepsController