import "./Diseases.css";
import About from "../about/About.js";
import Footer from "../footer/Footer.js";
import { Summary } from "../summary/Summary.js";
import { Pathies } from "../pathies/Pathies";
import { Analysis } from "../analysis/Analysis";
// import Home from '../home/Home';
import Header from "../Header/Header";
import { Pathies1 } from "../pathies/Pathies1";

function Diseases() {
  const disease = "Migraine";
  const About_disease =
    "This is one sided headache . It has light sensitivity, sound sensitivity. It is often associated with nausea- vomiting is also seen.For further information about the same, kindly visit - https://en.wikipedia.org/wiki/Migraine";
  const summary =
    "Different kinds of therapies help different patients. Some patients were cured by Homeopathy. Some are cured by following a particular kind of diet. This diet iis mostly PBWF along with green juice and green leaves. Many patients found pranayam to be very effective. Acupuncture/acupressure also works well. A large number of patients observed that mind plays a major role in this disease. So meditation or relaxing, not thinking about the diseases helped them.";
  return (
    <div className="diseases_ishaan">
      {/* <Home/> */}
      <Header disease={disease} />
      <About id="about" data={About_disease} disease={disease} />
      <Summary data={About_disease} />
      {/* <Analysis/> */}
      {/* <Pathies /> */}
      <Pathies1 />

      <Footer />
    </div>
  );
}

export default Diseases;
