import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const AppTitle = styled.h2`
  margin-top: 0;
  :hover {
    cursor: pointer;
  }
`;
const Main = styled.main`
  flex: 1;
  padding: 0 20px;
`;

const AppLayout = ({ children }) => {
  const history = useHistory();

  return (
    <AppWrapper>
      <AppTitle className="big-H txt-ctr" onClick={() => history.push('/')}>
        <span className="logo">My Currency Converter</span>
      </AppTitle>
      <Main>{children}</Main>
    </AppWrapper>
  );
};

export default AppLayout;
