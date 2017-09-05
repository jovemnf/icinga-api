let Hosts = require("./hosts");
let Services = require("./services");


class Icinga {
 
    constructor(hostname, username, password){
	    this.hostname = hostname;
	    this.username = username;
	    this.password = password;
    }
 
    /**
     *
     * @returns Hosts
     */
    get hosts(){
	    return new Hosts(this.hostname,this.username, this.password);
    }
 
    /**
     *
     * @returns Services
     */
    get services(){
        return new Services(this.hostname,this.username, this.password);
    }
	
}

module.exports = Icinga;