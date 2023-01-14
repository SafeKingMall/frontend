export const useMoney = () => {
  const MoneyNumber = (number: any) => {
    return `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`;
  };

  const MoneyNumber2 = (number: any) => {
    return `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };
  return { MoneyNumber, MoneyNumber2 };
};
