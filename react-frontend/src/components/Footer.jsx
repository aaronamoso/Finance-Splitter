import React from 'react';

function Footer() {
  const footerStyle = {
    margin: '2rem 0',
    marginTop: '4rem',
    textAlign: 'center',
    color: 'white',
  };

  const iconStyle = {
    fontSize: 30,
    color: 'white',
    textDecoration: 'none',
    marginRight: 15,
    verticalAlign: 'middle',
  };

  const socialsStyle = {
    display: 'inline',
  };

  const pStyle = {
    marginTop: '1.5rem',
    color: 'white',
  };

  return (
    <div style={footerStyle}>
      <div>
        <a
          className="socials"
          href="https://www.linkedin.com/in/aaronamoso/"
          style={socialsStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin" style={iconStyle}></i>
        </a>

        <a
          className="socials"
          href="https://github.com/aaronamoso"
          style={socialsStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github" style={iconStyle}></i>
        </a>

        <a
          className="socials"
          href="mailto:amosoaaron@gmail.com"
          style={socialsStyle}
        >
          <i className="fa-regular fa-envelope" style={iconStyle}></i>
        </a>

        <p style={pStyle}>
          &copy; {new Date().getFullYear()} Personal Finance Splitter. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;