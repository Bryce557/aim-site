/*
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { submitResponse } from '../actions/blogActions';

const ResponseForm = ( {id} ) => {
  const dispatch = useDispatch();
  const [authorId, setAuthor] = useState('');
  const [body, setBody] = useState('');

  const handleBodyChange = (newBody) => {
    setBody(newBody);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    dispatch(submitResponse(authorId, id, body))
    // Reset form fields
    setAuthor('');
    setBody('')
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="body">
        <Form.Label>Comment:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={body}
          onChange={handleBodyChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit Response
      </Button>
    </Form>
  );
};

export default ResponseForm;
*/
