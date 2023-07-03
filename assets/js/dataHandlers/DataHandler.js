class DataHandler {

    constructor(data) {
        if (this.constructor == DataHandler) {
            throw new Error("Abstract class!");
        }
    }

    getData() {
        throw new Error("Need to be implemented");
    }

    setData() {
        throw new Error("Need to be implemented");
    }

    appendData(data) {
        throw new Error("Need to be implemented");
    }

    _returnCurrencySchema() {
        return {
            id: value => typeof value == "number",
            type: value => typeof value == "boolean",
            value: value => typeof value == "number",
            description: value => typeof value == "string",
            date: value => value.constructor && value.constructor.name == "Date",
            name: value => typeof value == "string"
        }
    }

    _returnProfileSchema() {
        return {
            id: value => typeof value == "number",
            name: value => typeof value == "string",
            profilePic: value => /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(value) || 
            /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value) || value == "",
            recScore: value => typeof value == "number"
        }
    }

    _returnB64Schema() {
        return {
            b64: value => /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value)
        }
    }
}