import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__img" src='./logo-main.svg' alt="Logo Imagen" />
        <p className="footer__text">Developed by Astor Dioguardi</p>
      <div>
        <i class="fab fa-html5 icon" />
        <i class="fab fa-css3-alt icon" />
        <i class="fab fa-js icon" />
        <i class="fab fa-react icon" />
      </div>
    </footer>
  );
}