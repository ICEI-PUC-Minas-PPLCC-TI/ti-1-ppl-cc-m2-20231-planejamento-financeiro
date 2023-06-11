class DataHandler{
    constructor(data){
        try{
            this.#validateData(data);
            this.data = data;
        }
        catch(E){
            throw E;
        }
    }

    setData(data){
        try{
            this.#validateData(data);
            this.data = data;
        }
        catch(E){
            throw E;
        }
    }

    getData(){
        return this.data;
    }

    getRecs(){
        return this.data.recs;
    }

    #validateData(data){
        if(!data || typeof data != "object" || !data.recs || data.recs.length == 0){
            throw new TypeError("Invalid data");
        }
        data.recs.forEach((rec) => {
            if(!this.#validateJson(rec)){
                throw new TypeError("Malformed json");
            }
        })
        return;
    }

    #returnSchema(){
        return {
            image : value => /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(value),
            url : value => /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(value),
            description : value => typeof value == "string",
            title: value => typeof value == "string"
        }
    }
    
    #validateJson(object){
        const schema = this.#returnSchema();
        let errors = Object.keys(schema).filter(key => !schema[key](object[key])).map((key => new TypeError(`Invalid key: ${key}`)));
        errors.forEach((e) => {
            console.log(e.message);
        })
        return errors.length == 0;
    }
}