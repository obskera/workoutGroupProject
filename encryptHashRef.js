
//-=-=-=-=-=-//Setup//-=-=-=-=-//
// Run: 'npm install cryptr'
//
//import cryptr
const Cryptr = require('cryptr')
//add a unique key to .env and add .env to .gitignore, this is for example only
const cryptr = new Cryptr('SampleSecretKey');
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//

//-=-=-=-=-=-=-//Encoder/Decoder//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
class MrCryptr {
    contructor() {}
    //objBool for if it should parse decoded data, exclude or false if not an obj.
    encodeData(data, objBool) {
        if (objBool) { 
            const obj = JSON.stringify(data)
            const encryptedObj = cryptr.encrypt(obj)
            return encryptedObj
        }
        const encryptedData = cryptr.encrypt(data)
        return encryptedData
    }
    //objBool for if it should parse decoded data, exclude or false if not an obj.
    decodeData(data, objBool) {
        const decoded = cryptr.decrypt(data)
        if (objBool) {
            return JSON.parse(decoded)
        } else {
            return decoded
        }
    }
}
let cryptrKeeper = new MrCryptr()
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//

//-=-=-=-=-//Str Encryption Example//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//
    //sample str
    const simpleSample = 'bacon'
    //sample encryption
    const encryptedString = cryptrKeeper.encodeData(simpleSample)
    //sample decryption
    const decryptedString = cryptrKeeper.decodeData(encryptedString)
    
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//

//-=-=-=-=-//Obj Encryption Example//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//
    //sample js object
    let sampleDataObj = {
        user: "Bob",
        password: "hashedPass",
        userID: "userID123"
    }
    //converted to a json string object
    let sampleJSONDataObj = JSON.stringify(sampleDataObj)
    //encrypt it
    const encryptedObj = cryptrKeeper.encodeData(sampleJSONDataObj, true)
    //decrypted obj
    const decryptedObj = cryptrKeeper.decodeData(encryptedObj, true)
    //turn the output back to a normal JS object if you want
    const str = JSON.parse(decryptedObj)
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//