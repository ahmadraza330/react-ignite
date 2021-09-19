import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import logo from "../img/logo.svg";
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCh" });
  };

  return (
    <StyledNave variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search" onSubmit={handleSubmit}>
        <input type="text" value={textInput} onChange={inputHandler} />
        <button>Search</button>
      </form>
    </StyledNave>
  );
};

const StyledNave = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    padding: 0.5rem;
    font-size: 1.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    font-weight: bold;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export default Nav;
