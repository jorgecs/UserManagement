'use strict';


/**
 * Account deletion
 *
 * userId String User id to delete
 * returns APIResponse
 **/
exports.userDelete = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Operation returned successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Forgot password
 *
 * username String user that forgot their password
 * returns APIResponse
 **/
exports.userForgotPassword = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Operation returned successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Search user
 *
 * userId String User id to search
 * returns User
 **/
exports.userGet = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "1234",
  "userId" : "1",
  "recoveryEmail" : "rick@email.com",
  "email" : "fred@email.com",
  "username" : "frederick62"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * User identification
 *
 * body User_login_body 
 * returns UserSession
 **/
exports.userLogin = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userId" : "1",
  "username" : "frederick62"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logout
 *
 * returns APIResponse
 **/
exports.userLogout = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Operation returned successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register account
 *
 * body User Create a new user
 * returns User
 **/
exports.userRegister = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "1234",
  "userId" : "1",
  "recoveryEmail" : "rick@email.com",
  "email" : "fred@email.com",
  "username" : "frederick62"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edit user
 *
 * body User_userId_body  (optional)
 * userId String user that needs to be updated
 * returns User
 **/
exports.userUpdate = function(body,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "1234",
  "userId" : "1",
  "recoveryEmail" : "rick@email.com",
  "email" : "fred@email.com",
  "username" : "frederick62"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

