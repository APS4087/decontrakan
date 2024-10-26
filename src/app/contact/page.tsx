import React from "react";
import './page.css'; // CSS yang akan kita tulis di bagian bawah

export default function ContactPage() {
  return (
    <div className="container">
      <div className="left-section">
        <div className="sticky-header">
          <h1>D'ECONTRAKAN</h1>
        </div>
      </div>
      <div className="right-section">
        <h2>CONTACT US</h2>
        <p>We're excited to hear more about your feedback.</p>
        <form className="form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">Name</label>
              <input type="text" id="firstName" placeholder="Enter name" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Enter last name" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input type="text" id="phone" placeholder="Enter phone number" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail address</label>
              <input type="email" id="email" placeholder="Enter e-mail address" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">Message</label>
            <textarea id="description" placeholder="Write a message" maxLength="1000"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="fileUpload">Attach file(s) (max file size 10MB)</label>
            <input type="file" id="fileUpload" />
          </div>
          <div className="form-group checkbox-group">
            <input type="checkbox" id="completeForm" /> 
            < label htmlFor="completeForm" >
              I understand that uncompleted forms will be rejected and I have completed my form.
            </label>
          </div>
          <button type="submit" className="submit-button">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
