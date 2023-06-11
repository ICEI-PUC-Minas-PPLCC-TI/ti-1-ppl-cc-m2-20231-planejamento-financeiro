class UserBasicInfoDataHandler{
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


    #validateData(data){
        if(!data || typeof data != "object"){
            throw new TypeError("Invalid data");
        }
        if(!this.#validateJson(data)){
            throw new TypeError("Malformed json");
        }
        return;
    }

    #returnSchema(){
        return {
            profilePic : value => /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(value) || 
                                  /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value),
            username : value => typeof value == "string"
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