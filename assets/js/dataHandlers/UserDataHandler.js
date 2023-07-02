class UserDataHandler extends DataHandler {
    #currencyDataHandler;
    #profileDataHandler;
    #mergedData;

    constructor() {
        super();
        
        this.#currencyDataHandler = new CurrencyDataHandler();
        this.#profileDataHandler = new ProfileDataHandler();
        this.#mergedData = {
            profileInfo: this.#profileDataHandler,
            currencyInfo: this.#currencyDataHandler
        }
    }

    constructor(data) {
        super();

        this.setData(data);
    }

    getData() {
        return this.#mergedData;
    }

    setData(data) {
        
        this.#mergedData = data;
    }

}