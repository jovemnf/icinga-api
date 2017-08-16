/* eslint-disable no-mixed-spaces-and-tabs */
let request = require("request");

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
	get(){
		return new Promise((ok, fail) => {
			let options = {
				url: this.hostname + "/v1/objects/hosts",
				strictSSL: false,
				headers: {
					"Authorization": "Basic " + new Buffer(this.username + ":" + this.password).toString("base64")
				}
			};
			request.get(options,(err, r, body) => (err) ? fail(err) : ok(JSON.parse(body)));
		});
	}
    
	/**
     *
     * @param hostname
     * @param cascade
     * @returns {Promise}
     */
	remove(hostname, cascade = false){
		return new Promise((ok, fail) => {
			let options = {
				url: this.hostname + "/v1/objects/hosts/" + hostname + ((cascade) ? "?cascade=1" : ""),
				strictSSL: false,
				headers: {
					"Accept": "application/json",
					"Authorization": "Basic " + new Buffer(this.username + ":" + this.password).toString("base64")
				}
			};
			request.delete(options,(err, r, body) => (err) ? fail(err) : ok(JSON.parse(body)));
		});
	}
	
	/**
     *
     * @param hostname
     * @param json
     * @returns {Promise}
     */
	insert(hostname, json){
		return new Promise((ok, fail) => {
			let options = {
				url: this.hostname + "/v1/objects/hosts/" + hostname,
				strictSSL: false,
				form: JSON.stringify(json),
				headers: {
					"Accept": "application/json",
					"Authorization": "Basic " + new Buffer(this.username + ":" + this.password).toString("base64")
				}
			};
			request.put(options,(err, r, body) => (err) ? fail(err) : ok(JSON.parse(body)));
		});
	}
    
	/**
     *
     * @param hostname
     * @param json
     * @returns {Promise}
     */
	update(hostname, json){
		return new Promise((ok, fail) => {
			let options = {
				url: this.hostname + "/v1/objects/hosts/" + hostname,
				strictSSL: false,
				form: JSON.stringify(json),
				headers: {
					"Accept": "application/json",
					"Authorization": "Basic " + new Buffer(this.username + ":" + this.password).toString("base64")
				}
			};
			request.post(options,(err, r, body) => (err) ? fail(err) : ok(JSON.parse(body)));
		});
	}
    
	/**
     *
     * @returns {Promise}
     */
	getOne(namehost){
		return new Promise((ok, fail) => {
			if (!namehost){
				return fail(new Error("name host not found"));
			}
			let options = {
				url: this.hostname + "/v1/objects/hosts/" + namehost,
				strictSSL: false,
				headers: {
					"Authorization": "Basic " + new Buffer(this.username + ":" + this.password).toString("base64")
				}
			};
			request.get(options,(err, r, body) => (err) ? fail(err) : ok(JSON.parse(body)));
		});
	}
    
}

module.exports = Hosts;