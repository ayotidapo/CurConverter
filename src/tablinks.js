// import CardSvg from 'svgs/CardSvg';
// import AcctSvg from 'svgs/AcctSvg';
// import QRSvgs from 'svgs/QRSvgs';
// import USDsvg from 'svgs/USDsvg';
// import TransferSvg from 'svgs/TransferSvg';

const tablinks = [
  {
    methodId: 'cards',
    view: 'paywithcard',
    title: 'Cards',
    channel: 'card',
    icon: 'debit-card-icon',
  },
  {
    methodId: 'account',
    view: 'enter_phone',
    title: 'Eyowo',
    channel: 'eyowo',
    icon: 'cowry-icon',
  },
  // {
  //   methodId: 'qrcode',
  //   view: 'scancode',
  //   title: 'QR Code',
  //   icon: 'qr-icon',
  // },
  // {
  //   methodId: 'ussd',
  //   view: 'paywithussd',
  //   title: 'USSD',
  //   icon: 'airtime-icon',
  // },
  // {
  //   methodId: 'transfer',
  //   view: 'bank_transfer',
  //   title: 'Transfer',
  //   icon: 'bank-tranz',
  // },
];

export default tablinks;
