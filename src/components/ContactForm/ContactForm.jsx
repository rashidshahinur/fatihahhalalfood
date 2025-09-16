import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import ValidFeedback from './ValidFeedback';
import InvalidFeedback from './InvalidFeedback';

function ContactForm() {
  return (
    <Form
      action="https://formspree.io/f/myzdqyvd"
      method="POST"
      noValidate
      className="bg-dark text-light p-5 needs-validation"
      id="form"
    >
      {/* First + Last Name */}
      <Form.Group className="row mb-3">
        <Col className="mb-3 mb-md-0" md={6}>
          <Form.Label htmlFor="firstName" className="text-capitalize">
            First name
          </Form.Label>
          <Form.Control
            className="rounded-0"
            type="text"
            name="firstName"
            id="firstName"
            required
          />
          <ValidFeedback />
          <InvalidFeedback message="Please enter your first name." />
        </Col>
        <Col md={6}>
          <Form.Label htmlFor="lastName" className="text-capitalize">
            Last name
          </Form.Label>
          <Form.Control
            className="rounded-0"
            type="text"
            name="lastName"
            id="lastName"
            required
          />
          <ValidFeedback />
          <InvalidFeedback message="Please enter your last name." />
        </Col>
      </Form.Group>

      {/* Phone + Email */}
      <Form.Group className="row mb-3">
        <Col className="mb-3 mb-md-0" md={6}>
          <Form.Label htmlFor="phone" className="text-capitalize">
            Phone number
          </Form.Label>
          <Form.Control
            className="rounded-0"
            type="tel"
            name="phone"
            id="phone"
            required
          />
          <ValidFeedback />
          <InvalidFeedback message="Please enter your phone number." />
        </Col>
        <Col md={6}>
          <Form.Label htmlFor="email" className="text-capitalize">
            Email address
          </Form.Label>
          <Form.Control
            className="rounded-0"
            type="email"
            name="email"
            id="email"
            required
          />
          <ValidFeedback />
          <InvalidFeedback message="Please enter your email address." />
        </Col>
      </Form.Group>

      {/* Date + Guests */}
      <Form.Group className="row mb-3">
        <Col className="mb-3 mb-md-0" md={6}>
          <Form.Label htmlFor="date">Date</Form.Label>
          <Form.Control
            className="rounded-0"
            type="date"
            name="date"
            id="date"
            required
          />
          <ValidFeedback />
          <InvalidFeedback message="Please choose a date." />
        </Col>
        <Col md={6}>
          <Form.Label htmlFor="guests" className="text-capitalize">
            Number of guests
          </Form.Label>
          <Form.Control
            className="rounded-0"
            type="number"
            name="guests"
            id="guests"
            min="1"
            required
          />
          <ValidFeedback />
          <InvalidFeedback message="Please choose the number of guests." />
        </Col>
      </Form.Group>

      {/* Comments */}
      <Form.Group className="mb-3">
        <Form.Label htmlFor="comments">Comments</Form.Label>
        <Form.Control
          className="rounded-0"
          as="textarea"
          name="comments"
          id="comments"
          rows={3}
        />
      </Form.Group>

      {/* Hidden fields for Formspree */}
      <input
        type="hidden"
        name="_subject"
        value="New message from Fatihah Halal Food website"
      />
      <input type="hidden" name="_template" value="table" />

      {/* Honeypot (spam protection) */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />

      {/* Submit button */}
      <Button
        variant="success"
        type="submit"
        className="btn btn-lg rounded-0 mt-4"
        id="submit-btn"
      >
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;