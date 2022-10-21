import ContactFormUtils from "../utils/contactForm.js";
import SortByUtils from "../utils/sortBy.js";

export default class Utils {
  static ContactForm() {
    const contactFormUtils = new ContactFormUtils();
    contactFormUtils.launcher();
  }

  static SortBy() {
    const sortByUtils = new SortByUtils();
    sortByUtils.launcher();
  }
}