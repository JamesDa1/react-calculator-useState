import { createGlobalStyle } from "styled-components";
import Display from "./Display";
import Header from "./Header";
import Numpad from "./Numpad";
import { useState } from "react";

const CalculatorApp = () => {
  // set State, and define functions, then pass as needed to children
  const [mathString, setMathString] = useState("");

  const addToString = (e) => {
    setMathString(mathString + e.target.textContent);
  };

  // Use slicing to return a slice of the string.  "STOP" => "STO"
  const deleteCharacter = () => {
    setMathString(mathString.slice(0, -1));
  };

  // Checks if the solution contains ".", rounds to 3 decimals
  // eval is not safe, could have parsed the string with regex
  const solveEquation = () => {
    setMathString(
      eval(mathString).toString().includes(".")
        ? eval(mathString).toFixed(3).toString()
        : eval(mathString).toString()
    );
  };

  const clearAll = () => {
    setMathString("");
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Display mathString={mathString} />
      <Numpad
        addToString={addToString}
        deleteCharacter={deleteCharacter}
        solveEquation={solveEquation}
        clearAll={clearAll}
      />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "League Spartan", sans-serif;
    font-weight: 700;
    }
    
    body {
        width: 100%;
        height: 100vh;
        background-color: hsl(222, 26%, 31%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
}
`;

export default CalculatorApp;
