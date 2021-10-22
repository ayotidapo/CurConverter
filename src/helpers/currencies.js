const currencies = [
  {
    name: 'Select Currency',
    currency: '',
  },
  {
    name: 'Emirati Dirham',
    currency: 'AED',
  },
  {
    name: 'Afghan Afghani',
    currency: 'AFN',
  },
  {
    name: 'Albania Lek',
    currency: 'ALL',
  },
  {
    name: 'Armenia Dram',
    currency: 'AMD',
  },
  {
    name: 'Dutch Cuilder',
    currency: 'ANG',
  },

  {
    name: 'Angola Kwanza',
    currency: 'AOA',
  },
  {
    name: 'Argentina Peso',
    currency: 'ARS',
  },
  {
    name: 'Australia Dollar',
    currency: 'AUD',
  },
  {
    name: 'Aruba',
    currency: 'AWG',
  },
  {
    name: 'Azerbaijan Manat',
    currency: 'AZN',
  },
  {
    name: 'Bosnia and Herzegovina',
    currency: 'BAM',
  },
  {
    name: 'Barbadian or Bajian Dollar',
    currency: 'BBD',
  },
  {
    name: 'Bangladeshi Taka',
    currency: 'BDT',
  },
  {
    name: 'Bulgaria Lev',
    currency: 'BGN',
  },
  {
    name: 'Bahrain Dinar',
    currency: 'BHD',
  },
  {
    name: 'Burundian Franc',
    currency: 'BIF',
  },
  {
    name: 'Bermudian Dollar',
    currency: 'BMD',
  },
  {
    name: 'Bruneian Dollar',
    currency: 'BND',
  },
  {
    name: 'Bolivian Boliviano',
    currency: 'BOB',
  },
  {
    name: 'Brazilian Real',
    currency: 'BRL',
  },
  {
    name: 'Bahamian Dollar',
    currency: 'BSD',
  },
  {
    name: 'Bhutan Ngultrum',
    currency: 'BTN',
  },
  {
    name: 'Botswana Pula',
    currency: 'BWP',
  },
  {
    name: 'Belarusian Rubble',
    currency: 'BYR',
  },
  {
    name: 'Belizian Dollar',
    currency: 'BZD',
  },
  {
    name: 'Canadian Dollar',
    currency: 'CAD',
  },
  {
    name: 'Congolese Franc',
    currency: 'CDF',
  },
  {
    name: 'Swiss Franc',
    currency: 'CHF',
  },

  {
    name: 'Chilian Peso',
    currency: 'CLP',
  },
  {
    name: 'Chinese Yuan',
    currency: 'CNY',
  },
  {
    name: 'Colombian Peso',
    currency: 'COP',
  },
  {
    name: 'Costa Rica Colon',
    currency: 'CRC',
  },
  {
    name: 'Cuban Peso',
    currency: 'CUP',
  },
  {
    name: 'Cape Verde Escudo',
    currency: 'CVE',
  },
  {
    name: 'Czech Koruna',
    currency: 'CZK',
  },
  {
    name: 'Djibouti',
    currency: 'DJF',
  },
  {
    name: 'Danish Krone',
    currency: 'DKK',
  },

  {
    name: 'Dominican Republic',
    currency: 'DOP',
  },
  {
    name: 'Algeria',
    currency: 'DZD',
  },
  {
    name: 'Egypt',
    currency: 'EGP',
  },
  {
    name: 'Eritrea',
    currency: 'ERN',
  },
  {
    name: 'Ethiopia',
    currency: 'ETB',
  },
  {
    name: 'Euro',
    currency: 'EUR',
  },

  {
    name: 'Georgia',
    currency: 'GEL',
  },
  {
    name: 'Ghana',
    currency: 'GHS',
  },
  {
    name: 'Gibraltar',
    currency: 'GIP',
  },
  {
    name: 'Gambia',
    currency: 'GMD',
  },
  {
    name: 'Guinea',
    currency: 'GNF',
  },
  {
    name: 'Guatemala',
    currency: 'GTQ',
  },
  {
    name: 'Guyana',
    currency: 'GYD',
  },
  {
    name: 'Hong Kong',
    currency: 'HKD',
  },
  {
    name: 'Honduras',
    currency: 'HNL',
  },
  {
    name: 'Croatia',
    currency: 'HRK',
  },
  {
    name: 'Haiti',
    currency: 'HTG',
  },
  {
    name: 'Hungary',
    currency: 'HUF',
  },
  {
    name: 'Indonesia',
    currency: 'IDR',
  },
  {
    name: 'Israeli Shekel',
    currency: 'ILS',
  },
  {
    name: 'India',
    currency: 'INR',
  },
  {
    name: 'Iraq',
    currency: 'IQD',
  },
  {
    name: 'Iran',
    currency: 'IRR',
  },
  {
    name: 'Iceland',
    currency: 'ISK',
  },
  {
    name: 'Jamaica',
    currency: 'JMD',
  },
  {
    name: 'Jordan',
    currency: 'JOD',
  },
  {
    name: 'Japan',
    currency: 'JPY',
  },
  {
    name: 'Kenya',
    currency: 'KES',
  },
  {
    name: 'Kyrgyzstan',
    currency: 'KGS',
  },
  {
    name: 'Cambodia',
    currency: 'KHR',
  },
  {
    name: 'Comoros',
    currency: 'KMF',
  },
  {
    name: 'North Korea',
    currency: 'KPW',
  },
  {
    name: 'South Korea',
    currency: 'KRW',
  },
  {
    name: 'Kuwait',
    currency: 'KWD',
  },
  {
    name: 'Cayman Islands',
    currency: 'KYD',
  },
  {
    name: 'Kazakhstan',
    currency: 'KZT',
  },
  {
    name: 'Laos',
    currency: 'LAK',
  },
  {
    name: 'Lebanon',
    currency: 'LBP',
  },
  {
    name: 'Sri Lanka',
    currency: 'LKR',
  },
  {
    name: 'Liberia',
    currency: 'LRD',
  },
  {
    name: 'Lesotho',
    currency: 'LSL',
  },
  {
    name: 'Lithuania',
    currency: 'LTL',
  },
  {
    name: 'Libya',
    currency: 'LYD',
  },
  {
    name: 'Moroccan Dirham',
    currency: 'MAD',
  },

  {
    name: 'Moldova',
    currency: 'MDL',
  },
  {
    name: 'Madagascar',
    currency: 'MGA',
  },
  {
    name: 'Macedonia',
    currency: 'MKD',
  },
  {
    name: 'Myanmar',
    currency: 'MMK',
  },
  {
    name: 'Mongolia',
    currency: 'MNT',
  },
  {
    name: 'Macao',
    currency: 'MOP',
  },
  {
    name: 'Mauritania',
    currency: 'MRO',
  },
  {
    name: 'Mauritius',
    currency: 'MUR',
  },
  {
    name: 'Maldives',
    currency: 'MVR',
  },
  {
    name: 'Malawi',
    currency: 'MWK',
  },
  {
    name: 'Mexico',
    currency: 'MXN',
  },
  {
    name: 'Malaysia',
    currency: 'MYR',
  },
  {
    name: 'Mozambique',
    currency: 'MZN',
  },
  {
    name: 'Namibia',
    currency: 'NAD',
  },
  {
    name: 'Nigeria',
    currency: 'NGN',
  },
  {
    name: 'Nicaragua',
    currency: 'NIO',
  },
  {
    name: 'Norwegian Krone',
    currency: 'NOK',
  },

  {
    name: 'Nepal',
    currency: 'NPR',
  },
  {
    name: 'New Zealand Dollar',
    currency: 'NZD',
  },

  {
    name: 'Oman',
    currency: 'OMR',
  },
  {
    name: 'Panama',
    currency: 'PAB',
  },
  {
    name: 'Peru',
    currency: 'PEN',
  },
  {
    name: 'Papua New Guinea',
    currency: 'PGK',
  },
  {
    name: 'Philippines',
    currency: 'PHP',
  },
  {
    name: 'Pakistan',
    currency: 'PKR',
  },
  {
    name: 'Poland',
    currency: 'PLN',
  },
  {
    name: 'Paraguay',
    currency: 'PYG',
  },
  {
    name: 'Qatar',
    currency: 'QAR',
  },
  {
    name: 'Romania',
    currency: 'RON',
  },
  {
    name: 'Serbia',
    currency: 'RSD',
  },
  {
    name: 'Russia',
    currency: 'RUB',
  },
  {
    name: 'Rwanda',
    currency: 'RWF',
  },
  {
    name: 'Saudi Arabia',
    currency: 'SAR',
  },
  {
    name: 'Solomon Islands',
    currency: 'SBD',
  },
  {
    name: 'Seychelles',
    currency: 'SCR',
  },
  {
    name: 'Sudan',
    currency: 'SDG',
  },
  {
    name: 'Sweden',
    currency: 'SEK',
  },
  {
    name: 'Singapore',
    currency: 'SGD',
  },
  {
    name: 'Saint Helena',
    currency: 'SHP',
  },
  {
    name: 'Sierra Leone',
    currency: 'SLL',
  },
  {
    name: 'Somalia',
    currency: 'SOS',
  },
  {
    name: 'Suriname',
    currency: 'SRD',
  },
  {
    name: 'South Sudan',
    currency: 'SSP',
  },
  {
    name: 'Sao Tome and Principe',
    currency: 'STD',
  },
  {
    name: 'Syria',
    currency: 'SYP',
  },
  {
    name: 'Swaziland',
    currency: 'SZL',
  },
  {
    name: 'Thailand',
    currency: 'THB',
  },
  {
    name: 'Tajikistan',
    currency: 'TJS',
  },
  {
    name: 'Turkmenistan',
    currency: 'TMT',
  },
  {
    name: 'Tunisia',
    currency: 'TND',
  },
  {
    name: 'Tonga',
    currency: 'TOP',
  },
  {
    name: 'Turkey',
    currency: 'TRY',
  },
  {
    name: 'Trinidad and Tobago',
    currency: 'TTD',
  },
  {
    name: 'Taiwan',
    currency: 'TWD',
  },
  {
    name: 'Tanzania',
    currency: 'TZS',
  },
  {
    name: 'Ukraine',
    currency: 'UAH',
  },
  {
    name: 'Uganda',
    currency: 'UGX',
  },
  {
    name: 'US Dollar',
    currency: 'USD',
  },
  {
    name: 'Uruguay',
    currency: 'UYU',
  },
  {
    name: 'Uzbekistan',
    currency: 'UZS',
  },
  {
    name: 'Venezuela',
    currency: 'VEF',
  },
  {
    name: 'Vietnam',
    currency: 'VND',
  },
  {
    name: 'Vanuatu',
    currency: 'VUV',
  },
  {
    name: 'Samoa',
    currency: 'WST',
  },
  {
    name: 'Central Africa CRA Franc',
    currency: 'XAF',
  },

  {
    name: 'East Carribean Dollar',
    currency: 'XCD',
  },

  {
    name: 'CFA Franc',
    currency: 'XOF',
  },

  {
    name: 'Yemen',
    currency: 'YER',
  },
  {
    name: 'South Africa',
    currency: 'ZAR',
  },
  {
    name: 'Zambia',
    currency: 'ZMK',
  },
  {
    name: 'Zimbabwe',
    currency: 'ZWL',
  },
];
export default currencies;
