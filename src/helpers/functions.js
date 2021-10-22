// eslint-disable-next-line import/prefer-default-export
export const formatAmount = (amount) => {
  if (!amount) return null;
  return parseFloat(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
