// eslint-disable-next-line import/prefer-default-export
export const formatAmount = (amount, num = 2) => {
  if (!amount) return null;
  return parseFloat(amount).toLocaleString('en-US', {
    minimumFractionDigits: num,
    maximumFractionDigits: num,
  });
};
