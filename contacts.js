/**
 * Created by Michael on 10/1/2015.
 * @param firstName
 * @param lastName
 * @param address
 * @param zipcode
 * @param telNum
 */

/**
 * Contact is used as a profile of a person within an address book. It contains their name and contact information.
 * @param firstName is the person's first name.
 * @param lastName is the person's last name.
 * @param address is where the person lives or works.
 * @param zipcode is the zip code of where the person lives or works.
 * @param telNum is the person's phone number.
 * @constructor
 */

var Contact = function (firstName, lastName, address, zipcode, telNum) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.zipcode = zipcode;
  this.telNum = telNum;
  var callNum = 0; //The number of times this contact has been called

  /**
   * call indicates that this contact is being called. It returns true if the call goes through, false otherwise.
   * @returns {boolean}
   */
  this.call = function () {
    callNum++;
    return true;
  };

  /**
   * numCalls is a counter that counts how many times that the person has been called.
   * @returns {number}
   */
  this.numCalls = function () {
    return callNum;
  };

};

/**
 * ContactList represents an address book that contains all of your Contacts.
 * @constructor
 */
var ContactList = function () {

  var contactList = []; //Empty array to contain the list of contacts

  /**
   * addContact adds a new contact to the list. Returns true if the contact was added but false otherwise.
   * @param contact is the new Contact to add.
   * @returns {boolean}
   */
  this.addContact = function (contact) {
    contactList.push(contact);
    return true;
  };

  /**
   * numContacts returns the number of contacts in the list
   * @returns {Number}
   */
  this.numContacts = function () {
    return contactList.length;
  };

  /**
   * findContact searches through the list by last name and returns a list of contacts that share the given last name.
   * @param last is the last name of the contact(s) that you are looking for.
   * @returns {*}
   */
  this.findContact = function (last) {
    return _.where(contactList, last);
  };

  /**
   * deleteContact deletes all contacts with the given first and last names.
   * @param first is the first name of the contact(s) that you want to remove.
   * @param last is the last name of the contact(s) that you want to remove.
   */
  this.deleteContact = function (first, last) {
    for (var i = 0; i < contactList.length; i++) {
      if (contactList[i].firstName === first && contactList[i].lastName === last) {
        contactList.splice(i, 1);
      }
    }
  };

  /**
   * compareLast compares the last names of two contacts and returns -1, 0, or 1 in order to determine their order.
   * @returns {number}
   */
  this.compareLast = function () {
    if (a.lastName > b.lastName) {
      return 1;
    }
    else if (a.lastName < b.lastName) {
      return -1
    }
    else {
      return 0;
    }

  };

  /**
   * listContacts lists all of the contacts in the list and is sorted alphabetically by last name.
   * @returns {*}
   */
  this.listContacts = function () {
    return _.sortBy(contactList, 'lastName');
  };
};