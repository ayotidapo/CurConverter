import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    
    to{
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid var(--pri-color);
  border-left-color: transparent;
  border-top-color: transparent;
  ${(props) => (props.className ? props.className : '')}
  animation: ${rotation} 1s linear infinite;
`;

export default Loader;
