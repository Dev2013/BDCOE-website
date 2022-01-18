import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 1.1rem;
  }
  label {
    font-size: 1.2rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 1.1rem;
    color: var(--gray-1);
background-color: #bbbbbb;
background-image: linear-gradient(160deg, #bbbbbb 21%, #ffffff 99%, #4d6b6b 100%);

 ;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 10px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: #1F75FE;
    color: white;
    font-size: 1.5rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 0.3rem 3rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
      <FormStyle>
        <form action='/contact' method = 'post'> 
            <div className="form-group">
          <label htmlFor="name">
            Name :
            <input
              type="text"
               maxlength="32" 
               pattern="[A-Za-z]{1,32}"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
          Email :
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
               required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Message :
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
               required
            />
          </label>
        </div>
        <button type="submit">Send</button>
        </form>
      </FormStyle>
    </>
  );
}