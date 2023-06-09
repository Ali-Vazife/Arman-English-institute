import { Header } from "./components/Header/header.js";
import { Footer } from "./components/Footer/footer.js";
import { Courses } from "./components/Courses/courses.js";
import { Classprogram } from "./components/Classprogram/classProgram.js";

window.customElements.define("site-header", Header)
window.customElements.define("site-footer", Footer)
window.customElements.define("site-courses", Courses)
window.customElements.define("site-classprogram", Classprogram)