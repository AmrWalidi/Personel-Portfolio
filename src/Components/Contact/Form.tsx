import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Form() {
  return (
    <div>
      <form>
        <div className="top-inputs">
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
        </div>
        <input type="text" name="subject" placeholder="Subject" />
        <input
          type="text"
          name="message"
          placeholder="Write Your Message Here"
        ></input>
        <div className="submit-button-container">
          <div className="submit-button">
            <div className="contact-icon-container ">
              <FontAwesomeIcon className="contact-icon" icon={faPaperPlane} />
            </div>
            <p>Send Message</p>
          </div>
          <div className="loading-bar"></div>
        </div>
      </form>
    </div>
  );
}

export default Form;
