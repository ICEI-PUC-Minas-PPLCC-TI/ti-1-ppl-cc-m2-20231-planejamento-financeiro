class CurrencyDataHandler extends DataHandler{
    #data;

    constructor(data) {
        super();

        if (data != null) {
            this.setData(data);
        }

        else {
            this.#data = {};

            this.#data["currencies"] = [];
        }
        
    }

    getData() {
        return this.#data;
    }

    #validateData(data) {
        let isValid = true;

        if(!data || !data.currencies) throw new Error("Invalid data");

        data.currencies.forEach((c) => {
            if (!DataUtil.validateSchema(this._returnCurrencySchema(), c)) {
                isValid = false;
            }
        })

        if (!isValid) throw new Error("Invalid data");
    }

    setData(data) {
        this.#validateData(data);

        this.#data = data;
    }

    appendData(data) {
        this.#validateData(data);

        this.#data["currencies"].push(data);
    }

    getPositiveCurrency() { // {sum: xxx, currencies: xxx}
        const currencies = [];
        let sum = 0;

        if (this.#data && this.#data.currencies && this.#data.currencies.length > 0) {
            this.#data.currencies.forEach(c => {
                if (c.type == true) {
                    sum += c.value;
                    currencies.push(c);
                }
            })
        }
        
        return {
            sum: sum,
            currencies: currencies
        }
    }

    getNegativeCurrency() {
        const currencies = [];
        let sum = 0;

        if (this.#data && this.#data.currencies && this.#data.currencies.length > 0) {
            this.#data.currencies.forEach(c => {
                if (c.type == false) {
                    sum += c.value;
                    currencies.push(c);
                }
            })
        }
        
        return {
            sum: sum,
            currencies: currencies
        }
    }

    getCurrencyByMonth(month) {
        const currencies = [];
        let sum = 0;

        if (this.#data && this.#data.currencies && this.#data.currencies.length > 0) {
            this.#data.currencies.forEach(c => {
                if (c.date.getMonth() == month) {
                    sum += c.value;
                    currencies.push(c);
                }
            })
        }
        
        return {
            sum: sum,
            currencies: currencies
        }
    }

    getCurrencyByMonthAndType(type, month) {
        const currencies = [];
        let sum = 0;

        if (this.#data && this.#data.currencies && this.#data.currencies.length > 0) {
            this.#data.currencies.forEach(c => {
                if (c.type == type && c.date.getMonth() == month) {
                    sum += c.value;
                    currencies.push(c);
                }
            })
        }
        
        return {
            sum: sum,
            currencies: currencies
        }
    }
}