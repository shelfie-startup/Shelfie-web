/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	// schema: true,
  	firstName:{
  		type: 'string',
  		required: true
  	},
  	lastName:{
  		type: 'string',
  		required: true
  	},
  	middleName:{
  		type: 'string',
  		required: false
  	},
  	title:{
  		type: 'string'
  	},
  	email:{
  		type: 'string',
  		email: true,
  		required:true,
  		unique:true
  	},
  	encryptedPassword:{
  		type:'string'
  	},
  	toJSON: function(){
  		var obj = this.toObject();
  		delete obj.encryptedPassword;
  		delete obj.password;
  		delete obj.confirmation;
  		delete obj._csrf;
  		return obj;
  	}
  }
};

