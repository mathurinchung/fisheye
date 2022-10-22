import FormData from "./formData.js";

/**
 * Class that checks the value of inputs
 * @extends FormData
 */
export default class CheckInputs extends FormData {
  /**
   * Checks the value of the input name
   * @param {String} formdata
   */
  checkName(formdata) {
    const name = formdata.querySelector("input").value;
    const regex = /^[A-Za-z- ]+$/;

    if (name === "") throw new Error("Veuillez remplir ce champ");
    else if (regex.test(name) === false) throw new Error(`Veuillez saisir un nom valide`);
    else if (name.length < 2) throw new Error(`Veuillez saisir 2 caractères ou plus pour le champ du nom`);
  }

  /**
   * Checks the value of the input email
   * @param {String} formdata 
   */
  checkEmail(formdata) {
    const email = formdata.querySelector("input").value;
    const regex = /[a-z0-9.-_]+@[a-z0-9]+\.[a-z]{2,3}/;

    if (email === "") throw new Error("Veuillez remplir ce champ");
    else if (regex.test(email) === false) throw new Error("Veuillez entrer un email valide");
  }

  /**
   * Checks the value of the textarea message
   * @param {String} formdata 
   */
  checkMessage(formdata) {
    const message = formdata.querySelector("textarea").value;

    if (message === "") throw new Error("Veuillez remplir ce champ");
  }
}