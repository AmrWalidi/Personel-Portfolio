function Form() {
  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="Name *" required />
        <input type="email" name="eamil" placeholder="Email *" required />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea
          name="message"
          cols={30}
          rows={10}
          placeholder="Write Your Message Here *"
        ></textarea>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
}

export default Form;
