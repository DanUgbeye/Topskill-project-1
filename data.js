const uuid = require("uuid");

//this function creates a user object 
function createUser(firstName, lastName) {

  const id = uuid.v4();
  return {
    id: id,
    firstname: firstName,
    lastName: lastName,
    dateCreated: new Date(),
	  registrationUrl : `/register/${id}`
  }
}

module.exports = { createUser };