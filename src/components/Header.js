import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h3>Calc</h3>
      <ToggleTheme>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </ToggleTheme>
      <Control>
        <p>Theme</p>
      </Control>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    color: white;
  }
`;

const ToggleTheme = styled.div`
  display: flex;
  justify-content: flex-end;

  p {
    margin: 0 5px;
    color: white;
  }
`;

const Control = styled.div`
  p {
    float: right;
    color: white;
    margin-right: 4rem;
  }
`;
