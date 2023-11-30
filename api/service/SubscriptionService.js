'use strict';


/**
 * Choose subscription
 *
 * userId String user that needs to update their subsciption
 * subscription Integer type of subscription that is going to be selected
 * returns Subscription
 **/
exports.userEditSubscription = function(userId,subscription) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "subscriptionType" : 2,
  "subscriptionId" : "1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get subscription of user
 *
 * userId String user that needs to update their subsciption
 * returns Subscription
 **/
exports.userGetSubscription = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "subscriptionType" : 2,
  "subscriptionId" : "1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

