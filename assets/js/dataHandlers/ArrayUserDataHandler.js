class ArrayUserDataHandler extends DataHandler {
    #arrayDataHandler;

    constructor() {
        super();


    }

    constructor(data) {
        super();

        this.setData(data);
    }

    getData() {
        return this.#arrayDataHandler;
    }

    setData(data) {
        
    }

}