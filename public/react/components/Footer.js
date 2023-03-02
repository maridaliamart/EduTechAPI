import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.facebook.com">
        <button tabIndex="0" className="facebook"></button>
      </a>
      <a href="https://www.instagram.com">
        <button tabIndex="0" className="instagram"></button>
      </a>
      <a href="https://www.pinterest.com">
        <button tabIndex="0" className="pinterest"></button>
      </a>
      <a href="https://www.twitter.com">
        <button tabIndex="0" className="twitter"></button>
      </a>
      <br />
      <p className="footerTag">
        ©2023 All Rights Reserved. Shir Kocurek-Brynner Vetura-Maridalia
        Martinez®
      </p>
    </div>
  );
};
