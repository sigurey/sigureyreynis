// Footer.js
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <a
          href="https://www.instagram.com/yourInstagramHandle"
          target="_blank"
          rel="noopener noreferrer"
          style={iconLinkStyle}
        >
          <FaInstagram style={iconStyle} />
        </a>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#000',
  color: '#fff',
  padding: '5px',
  textAlign: 'center',
  width: '100%',
  marginTop: 'auto', // Ensure footer stays at bottom
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'sticky',
};

const iconLinkStyle = {
  color: '#fff',
  fontSize: '24px',
  marginTop: '10px',
};

const iconStyle = {
  fontSize: '40px',
};

export default Footer;
