// Server Configuration

var conf = {};

// Shared configuration between dev and production
conf.joe = "HEY THERE";

// Development configuration
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

}

// Production configuration
if (process.env.NODE_ENV === 'production') {

	conf.mongo_config = {
		'dbname' : 'hsanlist',
		'host' : 'ds135700.mlab.com',
		'port' : 35700,
		'auth' : {
			'name': 'hsan',
			'pass': 'hsan'
		},
		connect_string: function(){
			return 'mongodb://' + this.auth.name + ':' + this.auth.pass + '@' + this.host + ':' + this.port + '/' + this.dbname;
		}
	};

}

module.exports = conf;