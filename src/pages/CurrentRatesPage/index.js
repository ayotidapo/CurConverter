import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRates } from 'redux/actions/currentPageAction';
import { formatAmount } from 'helpers/functions';

const RatesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  width: 85%;
  border: 1px solid #e5e5e5;
  margin: 0 auto;
  margin-bottom: 20px;
  height: calc(100vh - 150px);
  padding: 10px;
  overflow-y: scroll;
  text-align: center;
  cursor: pointer;
`;

const CurrentRates = (props) => {
  const dispatch = useDispatch();
  const allRates = useSelector((state) => state.allRatesState);
  const { loading, data } = allRates;
  const historyState = props.history.location.state;
  const { base } = historyState;

  useEffect(() => {
    dispatch(getAllRates(base));
  }, []);

  return (
    <RatesWrapper>
      {data.map((obj) => (
        <p key={obj.currency}>
          <strong>1 {obj.currency} </strong> = {formatAmount(obj.rate, 3)}{' '}
          &nbsp;
        </p>
      ))}
    </RatesWrapper>
  );
};

export default CurrentRates;
