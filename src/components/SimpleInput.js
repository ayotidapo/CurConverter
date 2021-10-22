import styled from 'styled-components';

export const GenericIputStyle = () => `
  min-width: 310px;
  width: 100%;
  height: 50px;
  outline: none;
  padding: 10px;
  font-size: 1.2rem;
  border: none;
  color: var(--txt-color);
  border: 1px solid #f3f0f0;
  border-radius: 4px;

`;

const SimpleInput = styled.input`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${(props) =>
    props.type === 'number' &&
    `
    /* Firefox */
    -moz-appearance: textfield;
    `} /* input[type='number'] {
    -moz-appearance: textfield;
  } */
  ${GenericIputStyle}
`;

export default SimpleInput;
