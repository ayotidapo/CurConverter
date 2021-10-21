import { useState, useContext, useEffect } from 'react';
import classnames from 'classnames';
import { getReference } from 'helpers/functions';
import { axiosCheckout } from 'axiosRequest';
import RequestPage from 'pages/RequestPage';
import DetailsPage from 'pages/DetailsPage';
import PaymentStatusPage from 'pages/PaymentStatusPage';
import Icon from 'components/Icons';
import { AppContext } from 'context';
import Button from 'components/Button';
import CollapsibleBar from 'components/AppLayout/CollapsibleBar';
import { PageLoader } from 'components/Loader';

const textList = ['Go', 'Grow', 'Save', 'Spend'];
const listLen = textList.length;
const billReference = getReference();

const Main = () => {
  const [show, setShow] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [resData, setResData] = useState({});
  const [getBillError, setGetBillError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [billRef, setBillRef] = useState(billReference);
  const { view, setView, setInfo, dimension } = useContext(AppContext);

  const { channel, status } = resData;

  const onGetEyw = () => {
    window.open(`https://www.eyowo.com/getx`);
  };

  const verifyByQr = async (dynamicRef) => {
    try {
      setLoading(true);
      const response = await axiosCheckout.get(
        `v2/payments/links/${dynamicRef}`,
      );
      const { data } = response.data;
      setResData({ ...data });
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const getBill = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      //    v2/payments/${billRef}
      const response = await axiosCheckout.get(`v2/payments/links/${billRef} `);
      const { data } = response.data;

      setResData({ ...data });

      if (data.status === 'recalled') {
        setView('error-page');
        setInfo({
          title: 'Link is not valid anymore!',
          message: `Please contact the person who shared the link with you`,
        });
      }
      setLoading(false);
    } catch (e) {
      setGetBillError(true);
      setLoading(false);
    }
  };

  const ontoggleBar = () => {
    setShow(!show);
  };

  useEffect(() => {
    // document.body.dataset.theme = 'light';
    getBill();
  }, []);

  useEffect(() => {
    const tHandler = setInterval(() => {
      if (activeIndex < listLen - 1) return setActiveIndex(activeIndex + 1);
      setActiveIndex(0);
    }, 4000);
    return () => clearInterval(tHandler);
  }, [activeIndex]);

  useEffect(() => {
    const { dynamicRef } = resData;

    if (status === 'completed') {
      setView('close-completed');
    }
    if (channel === 'eyowo') {
      setBillRef(dynamicRef);
      verifyByQr(dynamicRef);
    }
  }, [channel, status]);

  if (loading) {
    return (
      <div className="app">
        <PageLoader />
      </div>
    );
  }

  if (!billReference) {
    return (
      <div
        className="d-flx jc-c al-i-c co-black"
        style={{ flex: '1', height: '100vh' }}
      >
        An error occured! &nbsp;
        <span className="co-primary">Bill reference is required</span>
      </div>
    );
  }

  if (getBillError) {
    return (
      <div
        className="d-flx jc-c al-i-c co-black"
        style={{ flex: '1', height: '100vh' }}
      >
        Failed to verify bill, please
        <span className="pr-col hand" onClick={() => window.location.reload()}>
          &nbsp;&nbsp;<span className="co-primary hand">Try again</span>
        </span>
      </div>
    );
  }

  return (
    <div className="app">
      <span
        className={classnames('colapse_btn', { 'rotate-x': show })}
        onClick={ontoggleBar}
      >
        <Icon id="collapze" width={40} height={40} />
      </span>
      <div
        className="app__container d-flx"
        style={{ paddingRight: show && '0px' }}
      >
        <div className="d-flx app__inner_wrap">
          <div className="left__side">
            <div className="logo_div-wrap">
              <div className="logo_div">
                <img src="/assets/Eyowo.png" alt="logo" />
              </div>
            </div>
            <main style={{ paddingTop: '2.8rem', marginRight: '15px' }}>
              <div className={`app__content ${dimension} `}>
                {view === 'req_page' && <RequestPage responseData={resData} />}
                {view === 'details_page' && (
                  <DetailsPage responseData={resData} />
                )}
                {(view.includes('close') || view === 'error-page') && (
                  <PaymentStatusPage responseData={resData} />
                )}
              </div>

              <div className="d-flx jc-c al-i-c mt-25">
                <Icon id="lock" width={10} height={14} className="mr-10" />
                <span>
                  Secured by <strong className="dap">Eyowo</strong>
                </span>
              </div>
            </main>
          </div>
          <div
            className={classnames('collapsible__wrapper', {
              xtnd__collapsible: !show,
            })}
          >
            <CollapsibleBar />
          </div>
        </div>
        <div className="d-flx al-i-c jc-sb  jc-sb-sm footr">
          <span
            className="f-28 info"
            style={{ fontWeight: '600', color: '#6F6F6F' }}
          >
            Good to{' '}
            {textList.map((_txt, i) => (
              <span
                className={classnames('co-primary tx', {
                  active_tx: i === activeIndex,
                })}
                key={i}
              >
                {textList[activeIndex]}
              </span>
            ))}
          </span>
          <p style={{ textAlign: 'center' }}>
            Everyone deserves financial growth. We are here for you.
          </p>
          <div className="mt-10-sm">
            <Button
              label="Get Eyowo"
              className="btn-small bg-black "
              name="secondary"
              onClick={onGetEyw}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
