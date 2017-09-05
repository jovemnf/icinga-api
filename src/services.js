let request = require("request");
let Buffer = require("buffer").Buffer;

class Services {
 
    constructor(hostname, username, password){
        this.hostname = hostname;
        this.username = username;
        this.password = password;
    }
    
    /**
     *
     * @param query
     * @return {Promise}
     */
    get(query){
        let qrt = (query) ? query : "";
        return new Promise((resolve, reject) => {
            let options = {
                url: this.hostname + "/v1/objects/services" + qrt,
                strictSSL: false,
                headers: {
                    "Authorization": "Basic " + new Buffer(this.username + ":" + this.password).toString("base64")
                }
            };
            request.get(options,(err, r, body) => (err) ? reject(err) : resolve(JSON.parse(body)));
        });
    }
 
    /**
     *
     * @param servicename
     * @param hostname
     * @param json
     * @returns {Promise}
     */
    update(servicename, hostname, json){
        return new Promise((resolve, reject) => {
            let options = {
                url: this.hostname + "/v1/objects/services/" + hostname + "!" + servicename,
                strictSSL: false,
                form: JSON.stringify(json),
                headers: {
                    "Accept": "application/json",
                    "Authorization": "Basic " + new Buffer(this.username + ":" + this.password).toString("base64")
                }
            };
            request.post(options,(err, r, body) => (err) ? reject(err) : resolve(JSON.parse(body)));
        });
    }
 
    /**
     *
     * @param servicename
     * @param hostname
     * @param json
     * @returns {Promise}
     */
    insert(servicename, hostname, json){
        return new Promise((resolve, reject) => {
            let options = {
                url: this.hostname + "/v1/objects/services/" + hostname + "!" + servicename,
                strictSSL: false,
                form: JSON.stringify(json),
                headers: {
                    "Accept": "application/json",
                    "Authorization": "Basic " + new Buffer(this.username + ":" + this.password).toString("base64")
                }
            };
            request.put(options,(err, r, body) => (err) ? reject(err) : resolve(JSON.parse(body)));
        });
    }
 
    /**
     *
     * @returns {Promise}
     */
    getOne(nameService){
        return new Promise((resolve, reject) => {
            if (!nameService){
                return reject(new Error("name os service not found"));
            }
            let options = {
                url: this.hostname + "/v1/objects/services/" + nameService,
                strictSSL: false,
                headers: {
                    "Authorization": "Basic " + new Buffer(this.username + ":" + this.password).toString("base64")
                }
            };
            request.get(options,(err, r, body) => (err) ? reject(err) : resolve(JSON.parse(body)));
        });
    }
 
    /**
     *
     * @returns {Promise}
     */
    remove(nameService){
        return new Promise((resolve, reject) => {
            if (!nameService){
                return reject(new Error("name os service not found"));
            }
            let options = {
                url: this.hostname + "/v1/objects/services/" + nameService,
                strictSSL: false,
                headers: {
                    "Authorization": "Basic " + new Buffer(this.username + ":" + this.password).toString("base64")
                }
            };
            request.delete(options,(err, r, body) => (err) ? reject(err) : resolve(JSON.parse(body)));
        });
    }
 
}

module.exports = Services;