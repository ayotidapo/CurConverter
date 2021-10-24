import { useState, useEffect } from 'react';

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
  const [inputValue, setInputValue] = useState(' ');
  const [prevData, setPrevData] = useState({});
  const [quoteValue, setQuoteValue] = useState({});
  const { converting } = useSelector((state) => state.converterState);

  const { prevQuote, prevBase, prevAmount, prevResult } = prevData;

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

  const debAmount = amount;

  useEffect(() => {
    if (!localStorage.lConvert) return;
    const lsData = JSON.parse(localStorage.lConvert);
    setPrevData(lsData);
    const formated = debAmount || formatAmount(lsData?.prevAmount);
    setInputValue(formated);
  }, []);

  useEffect(() => {
    const Amt = debAmount || prevAmount;
    const bs = base || prevBase;
    const qt = quote || prevQuote;

    if (Amt && bs && qt) makeConversion(bs, qt);
  }, [debAmount, base, quote]);

  const makeConversion = async (bas, quot) => {
    const { success, data } = await convertCurrency(bas, quot)(dispatch);
    if (!success) return;

    const rate = data?.result;
    const theQuot = quote || prevQuote;
    const quoteAmount = rate[theQuot];
    const theAmt = debAmount || prevAmount;
    const result = quoteAmount * parseFloat(theAmt);
    setQuoteValue({ result, cur: quote });

    const lsData = {
      prevQuote: theQuot,
      prevBase: base || prevBase,
      prevAmount: theAmt,
      prevResult: result,
    };
    localStorage.lConvert = JSON.stringify(lsData);
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
              const val = e.target.value;
              const newVal = val.replace(/,/g, '');
              setInputValue(newVal);
            }}
            onBlur={(e) => {
              handleBlur(e);
              const val = e.target.value || prevAmount;
              const formatted = formatAmount(val);
              setInputValue(formatted);
            }}
            curSign={base || prevBase}
            testId="amount-div"
          />

          <Input
            data={currencies}
            defaultValue={base || prevBase}
            id="base"
            name="base"
            label="Change From"
            onChange={handleChange}
            type="select"
            testId="base-select"
          />
          <Input
            data={currencies}
            defaultValue={quote || prevQuote}
            id="quote"
            name="quote"
            label="to"
            onChange={handleChange}
            type="select"
            testId="quote-select"
          />
        </Card>

        {converting && <Loader data-testid="loader-div" />}
        {(quoteValue?.result || prevQuote) && !converting && (
          <div className="result-div" data-testid="result-div">
            <span className="pri-col">{base || prevBase}</span>{' '}
            {formatAmount(debAmount || prevAmount)}{' '}
            <small>is equivalent to</small>
            <h1 className="equals">
              <span className="pri-col">
                {quoteValue?.cur || prevQuote} &nbsp;
              </span>
              {formatAmount(quoteValue?.result || prevResult)}
            </h1>
          </div>
        )}
      </section>

      {(base || prevBase) && (
        <Link
          to={{
            pathname: '/current-rates',
            state: {
              base: base || prevBase,
            },
          }}
          className="link"
        >
          View All Exchange Rates
        </Link>
      )}
    </PageWrapper>
  );
};

export default ConverterPage;
