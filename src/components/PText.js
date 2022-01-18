import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 510px;
  margin-left : 0.5rem;
  font-size: 0.9rem;
  line-height: 1.5rem;
  color:white;
  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}