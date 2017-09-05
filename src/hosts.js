let request = require("request");
let Buffer = require("buffer").Buffer;

class Hosts {
 
    constructor(hostname, username, password){
        this.hostname = hostname;
        this.username = username;
        this.password = password;
    }
 
    /**
     *
     * @returns {Promise}
     */
    get(query){
        return new Promise((resolve, reject) => {
            let options = {
                url: this.hostname + "/v1/objects/hosts" + (query) ? query : "",
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
     * @param hostname
     * @param cascade
     * @returns {Promise}
     */
    remove(hostname, cascade = false){
        return new Promise((resolve, reject) => {
            let options = {
                url: this.hostname + "/v1/objects/hosts/" + hostname + ((cascade) ? "?cascade=1" : ""),
                strictSSL: false,
                headers: {
                    "Accept": "application/json",
                    "Authorization": "Basic " + new Buffer(this.username + ":" + this.password).toString("base64")
                }
            };
            request.delete(options,(err, r, body) => (err) ? reject(err) : resolve(JSON.parse(body)));
        });
    }
	
    /**
     *
     * @param hostname
     * @param json
     * @returns {Promise}
     */
    insert(hostname, json){
        return new Promise((resolve, reject) => {
            let options = {
                url: this.hostname + "/v1/objects/hosts/" + hostname,
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
     * @param hostname
     * @param json
     * @returns {Promise}
     */
    update(hostname, json){
        return new Promise((resolve, reject) => {
            let options = {
                url: this.hostname + "/v1/objects/hosts/" + hostname,
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
     * @returns {Promise}
     */
    getOne(namehost){
        return new Promise((resolve, reject) => {
            if (!namehost){
                return reject(new Error("name host not found"));
            }
            let options = {
                url: this.hostname + "/v1/objects/hosts/" + namehost,
                strictSSL: false,
                headers: {
                    "Authorization": "Basic " + new Buffer(this.username + ":" + this.password).toString("base64")
                }
            };
            request.get(options,(err, r, body) => (err) ? reject(err) : resolve(JSON.parse(body)));
        });
    }
 
}

module.exports = Hosts;