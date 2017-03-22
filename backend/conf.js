// Server Configuration

var conf = {};

// Shared configuration between dev and production
conf.joe = "HEY THERE";

// Development configuration
/*
if (process.env.NODE_ENV === 'development') {

	conf.mongo_config = {
		'dbname' : 'transort',
		'host' : 'localhost',
		'port' : 27017,
		'auth' : {
			'name': '',
			'pass': ''
		},
		connect_string: function(){
			return 'mongodb://' + this.auth.name + ':' + this.auth.pass + '@' + this.host + ':' + this.port + '/' + this.dbname;
		}
	};

}*/

// Production configuration

	conf.mongo_config = {
		'dbname' : 'transco',
		'host' : 'ds131320.mlab.com',
		'port' : 31320,
		'auth' : {
			'name': 'adelcr',
			'pass': 'azeqsdwxc123'
		},
		connect_string: function(){
			return 'mongodb://' + this.auth.name + ':' + this.auth.pass + '@' + this.host + ':' + this.port + '/' + this.dbname;
		}
	};

module.exports = conf;