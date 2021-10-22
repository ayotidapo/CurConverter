import styled from 'styled-components';
import SimpleInput, { GenericIputStyle } from './SimpleInput';

const InputWrapper = styled.div`
  position: relative;
  .cur-sign {
    position: absolute;
    top: 8px;
    left: 10px;
    color: #000;

    + ${SimpleInput} {
      padding-left: 28px !important;
    }
  }
`;

const SelectInput = styled.select`
  ${GenericIputStyle}
`;

const ErrorText = styled.div`
  padding: 5px;
  color: var(--err-color);
  font-size: 0.9rem;
`;

const Input = (props) => {
  const { error, curSign, data, ...rest } = props;

  if (props.type === 'select') {
    return (
      <InputWrapper>
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
      <div className="cur-sign">{curSign}</div>
      <SimpleInput {...rest} />
      <ErrorText>{error}</ErrorText>
    </InputWrapper>
  );
};

export default Input;
