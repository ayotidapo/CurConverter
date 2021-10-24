/* eslint-disable jest/no-deprecated-functions */
/* eslint-disable no-undef */
export default {
  interceptors: {
    response: {
      use: () => ({}),
    },
  },
  create: jest.fn(() => jest.genMockFromModule('axios')),
  get: jest.fn(() => Promise.resolve({ data: { success: true } })),
  defaults: {
    headers: {
      post: {
        'Content-Type': 'application/json',
      },
      common: {},
    },
    baseURL: '',
  },
};
