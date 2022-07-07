import styled from "styled-components";

const Numpad = ({ addToString, deleteCharacter, solveEquation, clearAll }) => {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  return (
    <CalcBody>
      {numbers.map((num) => {
        switch (num) {
          case 9:
            return (
              <>
                <StyledButton
                  onClick={(e) => {
                    addToString(e);
                  }}
                  key={num}
                >
                  {num}
                </StyledButton>
                <StyledButton
                  onClick={() => deleteCharacter()}
                  key="del"
                  className="del"
                >
                  DEL
                </StyledButton>
              </>
            );
          case 6:
            return (
              <>
                <StyledButton
                  onClick={(e) => {
                    addToString(e);
                  }}
                  key={num}
                >
                  {num}
                </StyledButton>
                <StyledButton
                  onClick={(e) => {
                    addToString(e);
                  }}
                  key="add"
                >
                  +
                </StyledButton>
              </>
            );
          case 3:
            return (
              <>
                <StyledButton
                  onClick={(e) => {
                    addToString(e);
                  }}
                  key={num}
                >
                  {num}
                </StyledButton>
                <StyledButton
                  onClick={(e) => {
                    addToString(e);
                  }}
                  key="sub"
                >
                  -
                </StyledButton>
              </>
            );
          case 0:
            return (
              <>
                <StyledButton
                  onClick={(e) => {
                    addToString(e);
                  }}
                  key="dec"
                >
                  .
                </StyledButton>
                <StyledButton
                  onClick={(e) => {
                    addToString(e);
                  }}
                  key={num}
                >
                  0
                </StyledButton>
                <StyledButton
                  onClick={(e) => {
                    addToString(e);
                  }}
                  key="div"
                >
                  /
                </StyledButton>
                <StyledButton
                  onClick={(e) => {
                    addToString(e);
                  }}
                  key="mul"
                >
                  *
                </StyledButton>
                <StyledButton
                  onClick={() => clearAll()}
                  key="reset"
                  className="reset"
                >
                  RESET
                </StyledButton>
                <StyledButton
                  onClick={() => solveEquation()}
                  key="solve"
                  className="equal"
                >
                  =
                </StyledButton>
              </>
            );
          default:
            return (
              <StyledButton
                onClick={(e) => {
                  addToString(e);
                }}
                key={num}
              >
                {num}
              </StyledButton>
            );
        }
      })}
    </CalcBody>
  );
};

export default Numpad;

const CalcBody = styled.div`
  display: flex;
  width: 450px;
  flex-wrap: wrap;
  background: #242d44;
  padding: 10px 5px;
  margin: 15px 0;
  border-radius: 10px;
`;

const StyledButton = styled.button`
  width: 90px;
  padding: 15px;
  outline: none;
  cursor: pointer;
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 5px 0px 0px #979797;
  margin: 10px 10px;
  font-size: 32px;

  // Modifies buttons based off extra classes
  &.reset {
    width: 200px;
    box-shadow: 0px 3px 0px 0px #414e73;
    background: #647198;
    color: #fff;
  }

  &.equal {
    width: 200px;
    box-shadow: 0px 3px 0px 0px #93261a;
    background-color: #d03f2f;
    color: #fff;
  }

  &.del {
    box-shadow: 0px 3px 0px 0px #414e73;
    background: #647198;
    color: #fff;
    font-size: 16px;
  }
  &:hover {
    background: green;
    transition: 0.2s ease-in-out;
  }
`;
