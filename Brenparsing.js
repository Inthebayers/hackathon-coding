/**
 * Input to this class will be the string containing the email draft body, along with a reference to the database to check against 
 * 
 * Take in string
 * 
 * parse it
 * 
 * use those tokens to test against database
 * 
 * Returns an array of any found users (i.e. if no users are found will be empty array)
 */
class User {

   constructor(firstName, lastName, preferred_name, eMail, pronouns) {
      // needs to be an array 
      this.firstName = firstName;
      this.lastName = lastName;
      this.preferred_name = preferred_name;
      this.email = eMail;
      this.pronouns = pronouns;
   }

}

const usersJS = require('./names.json');
foundPeopleArray = [];
users = [];

function alreadyExist(user) {
   for (let key in foundPeopleArray) {
      if (foundPeopleArray[key] === user) {
         return true; 
      }
   }
   return false; 
}

function javascriptArrayAdapting() {
   // for loop creating user objects 
   for (let key in usersJS) {
      for (let i = 0; i < usersJS[key].length; i++) {
         const person = new User(usersJS[key][i].first_name, key, usersJS[key][i].preferred_name, usersJS[key][i].email, usersJS[key][i].pronouns);
         users.push(person);

      }

   }
}

// search for first name 
function searchDatabaseFirst(firstNameFind) {
   for (let people = 1; people < users.length; people++) {
      if (users[people].firstName.toLowerCase() === firstNameFind.toLowerCase()) {
         return true;
      }
   }
   return false;
}


// search for last name in database
// takes last name to be searched for 
function searchDatabaseLast(lastNameFind) {
   // for each person in array
   for (let people = 0; people < users.length; people++) {
      // if current person's last name matches last name to be found 
      if (users[people].lastName.toLowerCase() === lastNameFind.toLowerCase()) {
         // return true 
         return true;
      }
   }
   // if nothing found, return false 
   return false;
}


// search full name with first and last name 
function searchDatabase(firstNameFind, lastNameFind) {

   // for each person in array 
   for (let people = 0; people < users.length; people++) {
      for (let firstNameIndex = 0; firstNameIndex < users[people].firstName.length; firstNameIndex++) {

         // if first and last name match index' first and last name 
         if (users[people].firstName[firstNameIndex].toLowerCase() === firstNameFind.toLowerCase() && users[people].lastName.toLowerCase() === lastNameFind.toLowerCase()) {

            // return true 
            return true;
         }
      }
   }
   return false;
}

// same functionality as searchdatabase but returns the object of the user we're looking for 
function searchDatabaseIndex(firstNameFind, lastNameFind) {

   // for each person in array 
   for (let people = 1; people < users.length; people++) {

      for (let firstNameIndex = 0; firstNameIndex < users[people].firstName.length; firstNameIndex++) {
         // if first and last name match index' first and last name 
         if (users[people].firstName[firstNameIndex].toLowerCase() === firstNameFind.toLowerCase() && users[people].lastName.toLowerCase() === lastNameFind.toLowerCase()) {

            // return true 
            if (!alreadyExist(users[people])) {
               foundPeopleArray.push(users[people]);
            }
         }
      }
   }
}
// searches the body of the email per tokenized word to reference with the imported .json file objects
function emailBodySearch(wordArray) {

   foundPeopleArray = [];

   // for each word in email, search
   // if current "for each" loop is true (i.e. database does contain user)
   for (let i = 1; i < wordArray.length; i++) {

      // search database for word left and right of found word
      // if current array index is in database 
      if (searchDatabaseLast(wordArray[i])) {

         // initialize bool tracker 
         currentSearch = false;

         // if first/last or last/first name is in database 
         if (searchDatabase(wordArray[i], wordArray[i - 1])) {        
            searchDatabaseIndex(wordArray[i], wordArray[i - 1]);
            // then in last, first format               

         }

         if (searchDatabase(wordArray[i + 1], wordArray[i])) {
            searchDatabaseIndex(wordArray[i + 1], wordArray[i]); 
         }
         // if database has object with names in this order
         if (searchDatabase(wordArray[i - 1], wordArray[i])) {
            // append found user to end of foundPeopleArray
            searchDatabaseIndex(wordArray[i - 1], wordArray[i]);
         }
      }
   }
}

// parse method
function parse(incomingEmail) {

   //parse string of incoming words forming email body into "tokens"
   wordArray = incomingEmail.split(" ");

   emailBodySearch(wordArray);

}

javascriptArrayAdapting();
console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
parse("hi alex matthews i just noticed that we have like people named andrew cox could you let them all know that we want to have an andrew cox convention i thought we could get them all together and have them compete to see who s the best one of them always signs their name like this cox drew at the end of their emails and it always grinds my gears i hope he loses anyways thanks bill");


console.log(foundPeopleArray);
