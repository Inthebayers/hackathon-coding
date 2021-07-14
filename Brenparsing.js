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

const users = require('./names.json');

console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");

class Parser {

   // parse method
   parse(incomingEmail) {

      //parse string of incoming words forming email body into "tokens"
      wordArray = str.split(" ");

      emailBodySearch(wordArray);


   }

   emailBodySearch(wordArray) {

      foundPeopleArray = [];
      
      // for each word in email, search
      // if current "for each" loop is true (i.e. database does contain user)
      for (let i = 1; i < wordArray.length; i++) {

         // search database for word left and right of found word
         // if current array index is in database 
         if (searchDatabaseFirst(wordArray[i])) {

            // initialize bool tracker 
            currentSearch = false;

            // if first/last name is in database 
            if (users[i - 1].lastName.toLowerCase() == wordArray[i-1].toLowerCase()) {

               // then in last, first format 
               let foundPeopleArray = users[]
            }
         }
      }
   }

   // search for first name 
   searchDatabaseFirst(firstNameFind) {
      for (let people = 1; people < users.length; people++) {
         if (users[people].firstName.toLowerCase() === firstNameFind.toLowerCase()) {
            return true;
         }
      }
      return false;
   }

   searchDatabaseFirstIndex(firstNameFind) {
      for (let people = 1; people < users.length; people++) {
         if (users[people].firstName.toLowerCase() === firstNameFind.toLowerCase()) {
            return true;
         }
      }
      return false;
   }

   // search for last name 
   searchDatabaseLast(lastNameFind) {
      for (let people = 1; people < users.length; people++) {
         if (users[people].lastName.toLowerCase() === lastNameFind.toLowerCase()) {
            return true;
         }
      }
      return false;
   }

   // search full name 
   searchDatabase(firstNameFind, lastNameFind) {

      // for each person in array 
      for (let people = 1; people < users.length; people++) {

         // if first and last name match index' first and last name 
         if (users[people].firstName.toLowerCase() === firstNameFind.toLowerCase() && users[people].lastName.toLowerCase() === lastNameFind.toLowerCase()) {

            // return true 
            return true;
         }
      }
      return false;
   }
}

