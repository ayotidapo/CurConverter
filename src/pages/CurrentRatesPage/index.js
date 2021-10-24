import { useEffect } from 'react';
import styled from 'styled-components';
import Input from 'components/Input';
import currencies from 'helpers/currencies';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader';
import { useFormik } from 'formik';
import { getAllRates } from 'redux/actions/currentPageAction';
import { formatAmount } from 'helpers/functions';

const RatesWrapper = styled.div`
  width: 85%;

  margin: 0 auto;
  margin-bottom: 20px;

  .rates_dv {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    padding: 10px;
    overflow-y: scroll;
    text-align: center;
    cursor: pointer;
    border: 1px solid #e5e5e5;
    height: calc(100vh - 150px);
  }
  select {
    min-width: 200px;
    width: 200px;
    border: 1px solid var(--pri-color);
  }
  .goBck {
    cursor: pointer;
    color: var(--pri-color);
  }
`;

const CurrentRates = (props) => {
  const formik = useFormik({
    initialValues: {
      base: '',
    },
  });

  const { values, handleChange } = formik;

  const dispatch = useDispatch();
  const allRates = useSelector((state) => state.allRatesState);
  const { loading, data } = allRates;
  const historyState = props.history.location.state;
  const base = values?.base || historyState.base;

  useEffect(() => {
    dispatch(getAllRates(base));
  }, [base]);

  return (
    <RatesWrapper>
      <span className="goBck" onClick={() => props.history.goBack()}>
        Go Back
      </span>
      <Input
        data={currencies}
        defaultValue={base}
        id="base"
        name="base"
        label=""
        onChange={handleChange}
        type="select"
      />
      <div className="rates_dv">
        {loading ? (
          <Loader />
        ) : (
          data.map((obj) => (
            <p key={obj.currency}>
              <strong>1 {obj.currency} </strong> = {formatAmount(obj.rate, 3)}{' '}
              &nbsp;
            </p>
          ))
        )}
      </div>
    </RatesWrapper>
  );
};

export default CurrentRates;
