import { useState } from "react";
import "./contact.scss";


export default function Contact() {
  const [message, setMessage] = useState(false);


  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" class="form-control" />
          <input type="email" placeholder="Email@mail.com" class="form-control" />
          <input type="text" placeholder="Subject" class="form-control" maxLength="50" />
          <textarea placeholder="Message" class="form-control"></textarea>
          <button type="submit" class="btn btn-outline-success">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
