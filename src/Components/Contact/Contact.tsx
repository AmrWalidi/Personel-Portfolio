import Header from "../Header";
import SideInfoList from "./SideInfoList";
import Form from "./Form";

function Contact() {
  
  return (
    <div id="contact">
      <Header title="GET IN TOUCH" backgroundText="CONTACT" />
      <div className="contact-section-content">
        <SideInfoList />
        <Form/>
      </div>
    </div>
  );
}
export default Contact;
