import { useState, useEffect } from 'react';
import useDebounce from 'hooks/useDebounce';
import { useSelector, useDispatch } from 'react-redux';
import { convertCurrency } from 'redux/actions/converterAction';
import Loader from 'components/Loader';
import styled from 'styled-components';
import { formatAmount } from 'helpers/functions';
import Card from 'components/Card';
import Input from 'components/Input';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import currencies from 'helpers/currencies';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  align-items: center;

  input:nth-last-of-type(1) {
    padding-left: 60px !important;
  }

  section {
    font-size: 1.4rem;
    width: 90%;
    border: 1px solid #fafafa;
    box-shadow: 0px 40px 30px rgba(0, 0, 0, 0.02);
  }
  ${Card} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 10px 20px;
    margin-bottom: 20px;
  }
  .link {
    margin-top: 40px;
    text-decoration: none;
    color: var(--pri-color);
    font-size: 1rem;
  }
  .result-div {
    margin-left: 20px;
    padding: 10px;
    width: 300px;
  }
  .equals {
    margin-top: 10px;
    color: #000;
  }
`;

const ConverterPage = () => {
  const [inputValue, setInputValue] = useState('');
  // const [converting, setConverting] = useState(false);
  const [quoteValue, setQuoteValue] = useState({});
  const { success, data, converting } = useSelector(
    (state) => state.converterState,
  );

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      amount: '',
      base: '',
      quote: '',
    },
  });

  const { values, handleChange, handleBlur } = formik;
  const { amount, base, quote } = values;

  useEffect(() => {
    if (!success) return;
    const rate = data?.result;
    const quoteAmount = rate[quote];
    const result = quoteAmount * parseFloat(amount);
    setQuoteValue({ result, cur: quote });
  }, [success]);

  useEffect(() => {
    if (amount && base && quote) makeConversion();
  }, [amount, base, quote]);

  useEffect(() => {
    if (amount && base && quote) makeConversion();
  }, [amount, base, quote]);

  const makeConversion = async () => {
    dispatch(convertCurrency(base, quote));
  };

  return (
    <PageWrapper>
      <section>
        <Card>
          <Input
            id="amount"
            name="amount"
            label="Enter Amount"
            type="text"
            value={inputValue}
            onChange={(e) => {
              handleChange(e);
              setInputValue(e.target.value);
            }}
            onBlur={(e) => {
              handleBlur(e);
              const formatted = formatAmount(e.target.value);
              setInputValue(formatted);
            }}
            curSign={base}
          />

          <Input
            data={currencies}
            id="base"
            name="base"
            label="Change From"
            onChange={handleChange}
            type="select"
          />
          <Input
            data={currencies}
            id="quote"
            name="quote"
            label="to"
            onChange={handleChange}
            type="select"
          />
        </Card>
        {converting && <Loader />}
        {quoteValue?.result && !converting && (
          <div className="result-div">
            <span className="pri-col">{base}</span> {formatAmount(amount)}{' '}
            <small>is equivalent to</small>
            <h1 className="equals">
              <span className="pri-col">{quoteValue?.cur} </span>
              {formatAmount(quoteValue?.result)}
            </h1>
          </div>
        )}
      </section>

      <Link to="/current-rates" className="link">
        View Exchange Rates
      </Link>
    </PageWrapper>
  );
};

export default ConverterPage;
