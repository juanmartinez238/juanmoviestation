import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="contact-container">
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xeqpdoeb"
        method="POST"
        className="contact-form"
      >
        <label className="contact-email-label">Your Email:</label>
        <input type="email" name="email" className="contact-email"/>
        <label className="contact-message-label">Message:</label>
        <input type="text" name="message" className="contact-message"/>
        {status === "SUCCESS" ? <p className="contact-thanks">Thanks!</p> : <button className ="contact-button">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
