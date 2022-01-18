import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  padding: 1rem;
  margin-left : 1rem;
  margin-right : 1rem;
background-color: #0093E9;
background-image: linear-gradient(160deg, #0093E9 51%, #80D0C7 100%);

;  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  .icon {
    color: #fff;
    background-color: smokewhite;
    padding: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
      height : auto;
    width: 1.5rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}