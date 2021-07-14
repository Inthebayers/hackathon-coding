/**
 * Input to this class will be the string containing the email draft body, along with a reference to the database to check against 
 * 
 * Take in string
 * 
 * parse it
 * 
 * use those tokens to test against database
 * 
 * if found
 *    contain and return the user as an object to be used for the front end
 * 
 * if not found 
 *    return null object so front end knows to display nothing 
 */
class User {

   constructor(firstName, lastName, number, eMail) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.number = number;
      this.email = eMail;
   }

}

const names = require('./names.json');

users = [];

users = JSON.parse(names);

class Parser {

   // // return an array of values that match on a certain key
   // getValues(users, key) {

   //    // create empty array 
   //    var names = [];

   //    // for each variable in json
   //    for (var i in users) {

   //       // if object is object 
   //       if (typeof users[i] == 'object') {
   //          // set array to object array in json 
   //          objects = objects.concat(getValues(obj[i], key));
   //       }
   //       // else if the object is last name searched 
   //       else if (i == key) {
   //          objects.push(obj[i]);
   //       }
   //    }
   //    return objects;
   // }

   // parse method
   parse(incomingEmail) {

      //parse string of incoming words forming email body into "tokens"
      wordArray = str.split(" ");

      // for each word in email, search
      // if current "for each" loop is true (i.e. database does contain user)
      for (let i = 1; i < wordArray.length; i++) {

         // search database for word left and right of found word
         // if current array index is in database 
         if (searchDatabase(users, wordArray[i])) {

            // initialize bool tracker 
            currentSearch = false;

            // if first/last name is in database 
            if (searchDatabase(wordArray[i - 1])) {

            }
            // if also true, then name is found 

            // create user with data 

         }
      }

   }

   searchDatabase(users, firstName) {

   }
}

