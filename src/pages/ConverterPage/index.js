import styled from 'styled-components';
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
  }
  .link {
    margin-top: 40px;
    text-decoration: none;
    color: var(--pri-color);
    font-size: 1rem;
  }
`;

const ConverterPage = () => {
  const formik = useFormik({
    initialValues: {
      amount: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { values, handleChange } = formik;
  return (
    <PageWrapper>
      <section>
        <Card>
          <Input
            id="amount"
            type="number"
            value={values.amount}
            onChange={handleChange}
            curSign="$"
            error="Field id required"
          />

          <Input data={currencies} type="select" error="Field id required" />
          <Input data={currencies} type="select" error="Field id required" />
        </Card>
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
