/* eslint-disable no-mixed-spaces-and-tabs */
let request = require("request");

class Services {
    
	constructor(hostname, username, password){
		this.hostname = hostname;
		this.username = username;
		this.password = password;
	}
    
	/**
     *
     * @returns {Promise}
     */
	get(){
		return new Promise((ok, fail) => {
			let options = {
				url: this.hostname + "/v1/objects/services",
				strictSSL: false,
				headers: {
					"Authorization": "Basic " + new Buffer(this.username + ":" + this.password).toString("base64")
				}
			};
			request.get(options,(err, r, body) => (err) ? fail(err) : ok(body));
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
		return new Promise((ok, fail) => {
			let options = {
				url: this.hostname + "/v1/objects/services/" + hostname + "!" + servicename,
				strictSSL: false,
				form: JSON.stringify(json),
				headers: {
					"Accept": "application/json",
					"Authorization": "Basic " + new Buffer(this.username + ":" + this.password).toString("base64")
				}
			};
			request.post(options,(err, r, body) => (err) ? fail(err) : ok(body));
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
		return new Promise((ok, fail) => {
			let options = {
				url: this.hostname + "/v1/objects/services/" + hostname + "!" + servicename,
				strictSSL: false,
				form: JSON.stringify(json),
				headers: {
					"Accept": "application/json",
					"Authorization": "Basic " + new Buffer(this.username + ":" + this.password).toString("base64")
				}
			};
			request.put(options,(err, r, body) => (err) ? fail(err) : ok(body));
		});
	}
    
	/**
     *
     * @returns {Promise}
     */
	getOne(name_service){
		return new Promise((ok, fail) => {
			if (!name_service){
				return fail(new Error("name os service not found"));
			}
			let options = {
				url: this.hostname + "/v1/objects/services/" + name_service,
				strictSSL: false,
				headers: {
					"Authorization": "Basic " + new Buffer(this.username + ":" + this.password).toString("base64")
				}
			};
			request.get(options,(err, r, body) => (err) ? fail(err) : ok(body));
		});
	}
    
}

module.exports = Services;