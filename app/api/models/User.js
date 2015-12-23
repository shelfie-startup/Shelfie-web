/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema:true,

  attributes: {
  	firstName:{
  		type: 'string',
  		required: true
  	},
  	lastName:{
  		type: 'string',
  		required: false
  	},
  	gender:{
  		type: 'string',
      enum: ['male', 'female', 'other'],
      required: false
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

