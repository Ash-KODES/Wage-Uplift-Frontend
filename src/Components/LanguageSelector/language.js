import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../CSS/Navbar.module.css";
import { NavDropdown } from "react-bootstrap";

// functional based component
const LanguageSelector = (props) => {
  const { i18n } = useTranslation(); // https://react.i18next.com/latest/usetranslation-hook
  const changeLanguage = (event) => { // creating a function named changeLanguage which pass the selected language from user to i18.n
    i18n.changeLanguage(event); 
  };   

  return (
    <NavDropdown
      onSelect={changeLanguage}
      id="dropdown-basic-button"
      title="Choose Language "
      className={
        props.langtype
          ? styles.LangDropdownForRegistration
          : styles.LangDropdown
      }
    >
      <NavDropdown.Item eventKey="en">English</NavDropdown.Item>
      <NavDropdown.Item eventKey="hn">Hindi</NavDropdown.Item>
      <NavDropdown.Item eventKey="bengali">Bengali</NavDropdown.Item>
      <NavDropdown.Item eventKey="marathi">Marathi</NavDropdown.Item>
      <NavDropdown.Item eventKey="telugu">Telugu</NavDropdown.Item>
    </NavDropdown>
  );
};

export default LanguageSelector;
