class ArrayUserDataHandler extends DataHandler {
    #arrayDataHandler;

    constructor(data) {
        super();

        if (data != null) {
            this.setData(data);
        }

        else {
            this.#arrayDataHandler = {};
            this.#arrayDataHandler["users"] = [];
        }

    }

    getData() {
        return this.#arrayDataHandler;
    }

    setData(data) {
        this.#validData(data);

        this.#arrayDataHandler = data;
    }

    appendData(data) {
        this.#validData(data);

        data.users.forEach(u => this.#arrayDataHandler.users.push(u));
    }

    #validData(data) {
        if (!data || !data.users) throw new Error("Invalid data");
        
        let isValid = true;

        data.users.forEach(u => {
            try {
                if (u.constructor.name != "UserDataHandler") {
                    isValid = false;
                }
            }
            catch(E) {
                isValid = false;
                throw E;
            }
        });
        
        if (!isValid) throw new Error("Invalid data");
    }

    getProfiles() {
        const profiles = {};

        profiles["profiles"] = [];

        this.#arrayDataHandler.users.forEach(u => {
            profiles["profiles"].push(u.getProfileInfo());
        })

        return profiles;
    }

    getUserByIndex(index) {
        if (index >= this.#arrayDataHandler.users.length) throw Error("Invalid index");

        return data.profiles[index];
    }

    getLastIndex() {
        return this.#arrayDataHandler.users.length - 1;
    }
}