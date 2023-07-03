class DataUtil {
    
    static validateSchema(schema, object) {
        const errors = Object.keys(schema).filter(key => !schema[key](object[key])).map(key => new TypeError(`Invalid key ${key}`));
        errors.forEach(e => console.log(e));
        return errors.length == 0;
    }

    static convertBytesToB64(data) {
        const binaryData = new TextDecoder().encoding(data),
              binaryDataArray = Array.from(binaryData, x => String.fromCodePoint(x)).join("");
        
        return btoa(binaryDataArray);
    }

    static convertB64toBytes(b64) {
        const codedBinaryData = atob(b64),
              codedBinaryDataArray = Uint8Array.from(codedBinaryData, x => x.codePointAt(0));

        return new TextDecoder().decode(codedBinaryDataArray);
    }
}