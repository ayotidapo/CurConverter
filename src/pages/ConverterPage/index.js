import { useState, useEffect } from 'react';
import Loader from 'components/Loader';
import styled from 'styled-components';
import axios from 'axios';
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
  const [converting, setConverting] = useState(false);
  const [quoteValue, setQuoteValue] = useState({});
  const formik = useFormik({
    initialValues: {
      amount: '',
      base: '',
      quote: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { values, handleChange, handleBlur } = formik;
  const { amount, base, quote } = values;

  useEffect(() => {
    if (amount && base && quote) makeConversion();
  }, [amount, base, quote]);

  const makeConversion = async () => {
    try {
      setConverting(true);
      const response = await axios.get(
        `https://api.fastforex.io/fetch-one?from=${base}&to=${quote}&api_key=${process.env.REACT_APP_CUR_CONV_KEY}`,
      );
      const rate = response?.data?.result;
      const quoteAmount = rate[quote];

      const result = quoteAmount * parseFloat(amount);
      setConverting(false);
      setQuoteValue({ result, cur: quote });
    } catch (e) {
      setConverting(false);
      // eslint-disable-next-line no-alert
      alert(e?.response?.data?.message || e?.message);
    }
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

// import styled from 'styled-components';
// import Card from 'components/Card';
// import Input from 'components/Input';
// import { Field, Formik, Form } from 'formik';
// import { Link } from 'react-router-dom';

// const PageWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   padding: 20px;
//   align-items: center;

//   section {
//     font-size: 1.4rem;
//     width: 90%;
//     border: 1px solid #fafafa;
//     box-shadow: 0px 40px 30px rgba(0, 0, 0, 0.02);
//   }
//   ${Card} {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
//     grid-gap: 10px 20px;
//   }
//   .link {
//     margin-top: 40px;
//     text-decoration: none;
//     color: var(--pri-color);
//     font-size: 1rem;
//   }
// `;

// const ConverterPage = () => {
//   return (
//     <PageWrapper>
//       <>
//         <section>
//           <Card>
//             <Formik
//               initialValues={{
//                 amount: '',
//               }}
//               onSubmit={(values, actions) => {
//                 setTimeout(() => {
//                   alert(JSON.stringify(values, null, 2));
//                   actions.setSubmitting(false);
//                 }, 1000);
//               }}
//             >
//               {(props) => (
//                 <Form>
//                   <Field
//                     id="amount"
//                     type="text"
//                     value={values.amount}
//                     onChange={handleChange}
//                     error="Field id required"
//                   />

//                   <Input error="Field id required" />
//                   <Input error="Field id required" />
//                 </Form>
//               )}
//             </Formik>
//           </Card>
//         </section>

//         <Link to="/current-rates" className="link">
//           View Exchange Rates
//         </Link>
//       </>
//     </PageWrapper>
//   );
// };

// export default ConverterPage;
