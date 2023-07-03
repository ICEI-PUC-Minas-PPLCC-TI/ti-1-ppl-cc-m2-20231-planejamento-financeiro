class UserDataHandler extends DataHandler {
    #currencyDataHandler;
    #profileDataHandler;
    #mergedData;

    constructor(data) {
        super();
        
        if (data != null) {
            this.setData(data);
        }
        else {
            this.#currencyDataHandler = new CurrencyDataHandler();
            this.#profileDataHandler = new ProfileDataHandler();
            this.#mergedData = {
                profileInfo: this.#profileDataHandler,
                currencyInfo: this.#currencyDataHandler
            }
        }
    }

    getData() {
        return this.#mergedData;
    }

    setData(data) {
        if (!data || !data.profileInfo || !data.currencyInfo) throw new Error("Invalid data"); 
        
        if (data.profileInfo.constructor.name != "ProfileDataHandler" || data.currencyInfo.constructor.name != "CurrencyDataHandler") {
            throw new Error("Invalid data");
        }
        
        this.#profileDataHandler = data.profileInfo;
        this.#currencyDataHandler = data.currencyInfo;

        this.#mergedData = data;
    }


    getProfileInfo() {
        return this.#profileDataHandler;
    }

    getCurrenciesInfo() {
        return this.#currencyDataHandler;
    }

}