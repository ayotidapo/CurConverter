import styled from 'styled-components';
import SimpleInput, { GenericIputStyle } from './SimpleInput';

const InputWrapper = styled.div`
  position: relative;
  .cur-sign {
    position: absolute;
    top: 37px;
    left: 10px;
    color: var(--pri-color);
    font-size: 1.2rem;
  }
  label {
    font-size: 1rem;
    min-height: 25px;
    display: block;
  }
`;

const SelectInput = styled.select`
  ${GenericIputStyle}
  color: #000;
`;

const ErrorText = styled.div`
  padding: 5px;
  color: var(--err-color);
  font-size: 0.9rem;
`;

const Input = (props) => {
  const { error, label, curSign, data, ...rest } = props;

  if (props.type === 'select') {
    return (
      <InputWrapper>
        <label>{label}</label>
        <SelectInput {...rest}>
          {data.map((option) => (
            <option key={option.currency} value={option.currency}>
              {option.currency} - {option.name}
            </option>
          ))}
        </SelectInput>
      </InputWrapper>
    );
  }

  return (
    <InputWrapper>
      <label>{label}</label>
      <div className="cur-sign">{curSign}</div>
      <SimpleInput {...rest} />
      <ErrorText>{error}</ErrorText>
    </InputWrapper>
  );
};

export default Input;
