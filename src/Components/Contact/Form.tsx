import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    count: 0,
    name: false,
    email: false,
    message: false,
  });

  const [valideForm, setValideForm] = useState(false);

  useEffect(() => {
    if (errors.count !== 0) {
      setValideForm(!(errors.name || errors.email || errors.message));
    }
  }, [errors]);

  const handleSbmit = () => {
    setErrors({
      count: 1,
      name: formData.name.length === 0,
      email: formData.email.length === 0 || !formData.email.includes("@"),
      message: formData.message.length === 0,
    });
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const input = document.getElementById(event.target.id);
    input?.classList.remove("error");
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  if (valideForm)
    return <div className="send-message">Thank you for your message :)</div>;

  return (
    <div>
      <form>
        <div className="top-inputs">
          <div>
            <input
              className={errors.name ? "error" : ""}
              type="text"
              value={formData.name}
              id="name"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
            {errors.name && <p className="error">This field is required</p>}
          </div>
          <div>
            <input
              className={errors.email ? "error" : ""}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />
            {errors.email && (
              <p className="error">An email must include @ symbol</p>
            )}
          </div>
        </div>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <div>
          <input
            className={errors.message ? "error" : ""}
            type="text"
            id="message"
            name="message"
            placeholder="Write Your Message Here"
            value={formData.message}
            onChange={handleChange}
          ></input>
          {errors.message && <p className="error">This field is required</p>}
        </div>
        <div onClick={handleSbmit} className="submit-button-container">
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
