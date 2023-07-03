class ProfileDataHandler extends DataHandler{
    #profile;

    constructor(data) {
        super();

        if (data) {
            this.setData(data);
        }

        else {
            this.#profile = {};
        }
    }

    getData() {
        return this.#profile;
    }

    setData(data) {
        if (!DataUtil.validateSchema(this._returnProfileSchema(), data)) {
            throw new Error("Invalid data");
        }

        this.#profile = data;
    }
}