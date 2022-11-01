import CheckInputs from "./checkInputs.js";

/**
 * Class that checks for invalid inputs
 * @extends CheckInputs
 */
export default class CheckIsInvalid extends CheckInputs {
  /**
   * Checks firstname is invalid
   * @param {String} id - selector to match firstname
   * @returns Boolean
   */
  firstname = id => this.checkInput(id, this.checkName);

  /**
   * Checks lastname is invalid
   * @param {String} id - selector to match lastname
   * @returns Boolean
   */
  lastname = id => this.checkInput(id, this.checkName);

  /**
   * Checks email is invalid
   * @param {String} id - selector to match email
   * @returns Boolean
   */
  email = id => this.checkInput(id, this.checkEmail);

  /**
   * Checks message is invalid
   * @param {String} id - selector to match message
   * @returns Boolean
   */
  message = id => this.checkInput(id, this.checkMessage);
}