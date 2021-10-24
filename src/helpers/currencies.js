// Commented currencie are not supported by FastForex.io API

const currencies = [
  {
    label: 'Select Currency',
    value: '',
  },
  {
    label: 'Emirati Dirham',
    value: 'AED',
  },
  {
    label: 'Afghan Afghani',
    value: 'AFN',
  },
  {
    label: 'Albania Lek',
    value: 'ALL',
  },
  {
    label: 'Armenia Dram',
    value: 'AMD',
  },
  {
    label: 'Dutch Cuilder',
    value: 'ANG',
  },

  {
    label: 'Angola Kwanza',
    value: 'AOA',
  },
  {
    label: 'Argentina Peso',
    value: 'ARS',
  },
  {
    label: 'Australia Dollar',
    value: 'AUD',
  },
  {
    label: 'Aruba',
    value: 'AWG',
  },
  {
    label: 'Azerbaijan Manat',
    value: 'AZN',
  },
  {
    label: 'Bosnia and Herzegovina',
    value: 'BAM',
  },
  {
    label: 'Barbadian or Bajian Dollar',
    value: 'BBD',
  },
  {
    label: 'Bangladeshi Taka',
    value: 'BDT',
  },
  {
    label: 'Bulgaria Lev',
    value: 'BGN',
  },
  {
    label: 'Bahrain Dinar',
    value: 'BHD',
  },
  {
    label: 'Burundian Franc',
    value: 'BIF',
  },
  {
    label: 'Bermudian Dollar',
    value: 'BMD',
  },
  {
    label: 'Bruneian Dollar',
    value: 'BND',
  },
  {
    label: 'Bolivian Boliviano',
    value: 'BOB',
  },
  {
    label: 'Brazilian Real',
    value: 'BRL',
  },
  {
    label: 'Bahamian Dollar',
    value: 'BSD',
  },
  {
    label: 'Bhutan Ngultrum',
    value: 'BTN',
  },
  {
    label: 'Botswana Pula',
    value: 'BWP',
  },
  {
    label: 'Belarusian Rubble',
    value: 'BYR',
  },
  {
    label: 'Belizian Dollar',
    value: 'BZD',
  },
  {
    label: 'Canadian Dollar',
    value: 'CAD',
  },
  {
    label: 'Congolese Franc',
    value: 'CDF',
  },
  {
    label: 'Swiss Franc',
    value: 'CHF',
  },

  {
    label: 'Chilian Peso',
    value: 'CLP',
  },
  {
    label: 'Chinese Yuan',
    value: 'CNY',
  },
  {
    label: 'Colombian Peso',
    value: 'COP',
  },
  {
    label: 'Costa Rica Colon',
    value: 'CRC',
  },
  {
    label: 'Cuban Peso',
    value: 'CUP',
  },
  {
    label: 'Cape Verde Escudo',
    value: 'CVE',
  },
  {
    label: 'Czech Koruna',
    value: 'CZK',
  },
  {
    label: 'Djibouti',
    value: 'DJF',
  },
  {
    label: 'Danish Krone',
    value: 'DKK',
  },

  {
    label: 'Dominican Republic',
    value: 'DOP',
  },
  {
    label: 'Algeria',
    value: 'DZD',
  },
  {
    label: 'Egypt',
    value: 'EGP',
  },
  {
    label: 'Eritrea',
    value: 'ERN',
  },
  {
    label: 'Ethiopia',
    value: 'ETB',
  },
  {
    label: 'Euro',
    value: 'EUR',
  },

  {
    label: 'Georgia',
    value: 'GEL',
  },
  {
    label: 'Ghana',
    value: 'GHS',
  },
  {
    label: 'Gibraltar',
    value: 'GIP',
  },
  {
    label: 'Gambia',
    value: 'GMD',
  },
  {
    label: 'Guinea',
    value: 'GNF',
  },
  {
    label: 'Guatemala',
    value: 'GTQ',
  },
  {
    label: 'Guyana',
    value: 'GYD',
  },
  {
    label: 'Hong Kong',
    value: 'HKD',
  },
  {
    label: 'Honduras',
    value: 'HNL',
  },
  {
    label: 'Croatia',
    value: 'HRK',
  },
  {
    label: 'Haiti',
    value: 'HTG',
  },
  {
    label: 'Hungary',
    value: 'HUF',
  },
  {
    label: 'Indonesia',
    value: 'IDR',
  },
  {
    label: 'Israeli Shekel',
    value: 'ILS',
  },
  {
    label: 'India',
    value: 'INR',
  },
  {
    label: 'Iraq',
    value: 'IQD',
  },
  {
    label: 'Iran',
    value: 'IRR',
  },
  {
    label: 'Iceland',
    value: 'ISK',
  },
  {
    label: 'Jamaica',
    value: 'JMD',
  },
  {
    label: 'Jordan',
    value: 'JOD',
  },
  {
    label: 'Japan',
    value: 'JPY',
  },
  {
    label: 'Kenya',
    value: 'KES',
  },
  {
    label: 'Kyrgyzstan',
    value: 'KGS',
  },
  {
    label: 'Cambodia',
    value: 'KHR',
  },
  {
    label: 'Comoros',
    value: 'KMF',
  },
  {
    label: 'North Korea',
    value: 'KPW',
  },
  {
    label: 'South Korea',
    value: 'KRW',
  },
  {
    label: 'Kuwait',
    value: 'KWD',
  },
  {
    label: 'Cayman Islands',
    value: 'KYD',
  },
  {
    label: 'Kazakhstan',
    value: 'KZT',
  },
  {
    label: 'Laos',
    value: 'LAK',
  },
  {
    label: 'Lebanon',
    value: 'LBP',
  },
  {
    label: 'Sri Lanka',
    value: 'LKR',
  },
  {
    label: 'Liberia',
    value: 'LRD',
  },
  {
    label: 'Lesotho',
    value: 'LSL',
  },
  {
    label: 'Lithuania',
    value: 'LTL',
  },
  {
    label: 'Libya',
    value: 'LYD',
  },
  {
    label: 'Moroccan Dirham',
    value: 'MAD',
  },

  {
    label: 'Moldova',
    value: 'MDL',
  },
  {
    label: 'Madagascar',
    value: 'MGA',
  },
  {
    label: 'Macedonia',
    value: 'MKD',
  },
  {
    label: 'Myanmar',
    value: 'MMK',
  },
  {
    label: 'Mongolia',
    value: 'MNT',
  },
  {
    label: 'Macao',
    value: 'MOP',
  },
  {
    label: 'Mauritania',
    value: 'MRO',
  },
  {
    label: 'Mauritius',
    value: 'MUR',
  },
  {
    label: 'Maldives',
    value: 'MVR',
  },
  {
    label: 'Malawi',
    value: 'MWK',
  },
  {
    label: 'Mexico',
    value: 'MXN',
  },
  {
    label: 'Malaysia',
    value: 'MYR',
  },
  {
    label: 'Mozambique',
    value: 'MZN',
  },
  {
    label: 'Namibia',
    value: 'NAD',
  },
  {
    label: 'Nigeria',
    value: 'NGN',
  },
  // {
  //   label: 'Nicaragua',
  //   value: 'NIO',
  // },
  {
    label: 'Norwegian Krone',
    value: 'NOK',
  },

  {
    label: 'Nepal',
    value: 'NPR',
  },
  {
    label: 'New Zealand Dollar',
    value: 'NZD',
  },

  {
    label: 'Oman',
    value: 'OMR',
  },
  {
    label: 'Panama',
    value: 'PAB',
  },
  {
    label: 'Peru',
    value: 'PEN',
  },
  {
    label: 'Papua New Guinea',
    value: 'PGK',
  },
  {
    label: 'Philippines',
    value: 'PHP',
  },
  {
    label: 'Pakistan',
    value: 'PKR',
  },
  {
    label: 'Poland',
    value: 'PLN',
  },
  {
    label: 'Paraguay',
    value: 'PYG',
  },
  {
    label: 'Qatar',
    value: 'QAR',
  },
  {
    label: 'Romania',
    value: 'RON',
  },
  {
    label: 'Serbia',
    value: 'RSD',
  },
  {
    label: 'Russia',
    value: 'RUB',
  },
  {
    label: 'Rwanda',
    value: 'RWF',
  },
  {
    label: 'Saudi Arabia',
    value: 'SAR',
  },
  {
    label: 'Solomon Islands',
    value: 'SBD',
  },
  {
    label: 'Seychelles',
    value: 'SCR',
  },
  {
    label: 'Sudan',
    value: 'SDG',
  },
  {
    label: 'Sweden',
    value: 'SEK',
  },
  {
    label: 'Singapore',
    value: 'SGD',
  },
  {
    label: 'Saint Helena',
    value: 'SHP',
  },
  {
    label: 'Sierra Leone',
    value: 'SLL',
  },
  {
    label: 'Somalia',
    value: 'SOS',
  },
  {
    label: 'Surilabel',
    value: 'SRD',
  },
  {
    label: 'South Sudan',
    value: 'SSP',
  },
  {
    label: 'Sao Tome and Principe',
    value: 'STD',
  },
  {
    label: 'Syria',
    value: 'SYP',
  },
  {
    label: 'Swaziland',
    value: 'SZL',
  },
  {
    label: 'Thailand',
    value: 'THB',
  },
  {
    label: 'Tajikistan',
    value: 'TJS',
  },
  {
    label: 'Turkmenistan',
    value: 'TMT',
  },
  {
    label: 'Tunisia',
    value: 'TND',
  },
  {
    label: 'Tonga',
    value: 'TOP',
  },
  {
    label: 'Turkey',
    value: 'TRY',
  },
  {
    label: 'Trinidad and Tobago',
    value: 'TTD',
  },
  {
    label: 'Taiwan',
    value: 'TWD',
  },
  {
    label: 'Tanzania',
    value: 'TZS',
  },
  {
    label: 'Ukraine',
    value: 'UAH',
  },
  {
    label: 'Uganda',
    value: 'UGX',
  },
  {
    label: 'US Dollar',
    value: 'USD',
  },
  {
    label: 'Uruguay',
    value: 'UYU',
  },
  {
    label: 'Uzbekistan',
    value: 'UZS',
  },
  // {
  //   label: 'Venezuela',
  //   value: 'VEF',
  // },
  {
    label: 'Vietnam',
    value: 'VND',
  },
  {
    label: 'Vanuatu',
    value: 'VUV',
  },
  {
    label: 'Samoa',
    value: 'WST',
  },
  {
    label: 'Central Africa CRA Franc',
    value: 'XAF',
  },

  {
    label: 'East Carribean Dollar',
    value: 'XCD',
  },

  {
    label: 'CFA Franc',
    value: 'XOF',
  },

  {
    label: 'Yemen',
    value: 'YER',
  },
  {
    label: 'South Africa',
    value: 'ZAR',
  },
  {
    label: 'Zambia',
    value: 'ZMK',
  },
  // {
  //   label: 'Zimbabwe',
  //   value: 'ZWL',
  // },
];
export default currencies;
