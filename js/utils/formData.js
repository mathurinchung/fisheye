/**
 * Class that handles the formdata
 */
export default class FormData {
  /**
   * Representing an array of the form's elements
   * @param {[HTMLElement]} formData - The array of the form's elements
   */
  constructor (formData) {
    this.formData = formData;
  }

  /**
   * Get FormData's element
   * @param {String} id - selector to match
   * @returns the formData within the document that matches the specified selector
   */
  getFormData = id => this.formData.find(el => el.querySelector(id));

  /**
   * Checks input
   * @param {String} id - selector to match formdata element
   * @param {Function} fn - The function that checks the input
   * @returns Boolean
   */
  checkInput(id, fn) {
    const formdata = this.getFormData(id);

    try {
      fn(formdata);

      formdata.removeAttribute("data-error");
      formdata.querySelector(id).setAttribute("aria-invalid", false);
      formdata.querySelector(id).removeAttribute("aria-errormessage");
      return false;
    } catch (error) {
      formdata.setAttribute("data-error", "* " + error.message);
      formdata.querySelector(id).setAttribute("aria-invalid", true);
      formdata.querySelector(id).setAttribute("aria-errormessage", error.message);
      return true;
    }
  }
}