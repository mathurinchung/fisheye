import ContactFormUtils from "../utils/contactForm.js";
import SortByUtils from "../utils/sortBy.js";
import LightBoxUtils from "../utils/lightBox.js";

export default class Utils {
  static ContactForm() {
    const contactFormUtils = new ContactFormUtils("#contact");
    contactFormUtils.launch();
  }

  static SortBy() {
    const sortByUtils = new SortByUtils();
    sortByUtils.launch();
  }

  static LightBox() {
    const lightBoxUtils = new LightBoxUtils("#lightbox");
    lightBoxUtils.launch();
  }
}