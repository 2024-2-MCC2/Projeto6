import React from 'react';
import styled from 'styled-components';

const StyledEmailLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ccc;
  }
`;

const EmailLink = ({ email, subject, body }) => {
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <StyledEmailLink href={mailtoLink}>
      {email}
    </StyledEmailLink>
  );
};

export default EmailLink;