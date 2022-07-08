import styled from "styled-components";
const Display = ({ mathString }) => {
  return (
    <CalcScreen>
      <StyledInput
        name="calc"
        id="screen"
        readOnly
        value={mathString ? mathString : ""}
      ></StyledInput>
    </CalcScreen>
  );
};

export default Display;

const CalcScreen = styled.div`
  width: 450px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  margin-block: 0.5rem;
  font-size: 3rem;
  text-align: right;
  padding-right: 1rem;
`;
