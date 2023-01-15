export const useDateFormat = () => {
  const registDate = (day: any) => {
    const today = new Date(day);
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day2 = ('0' + today.getDate()).slice(-2);
    const hours = ('0' + today.getHours()).slice(-2);
    const minutes = ('0' + today.getMinutes()).slice(-2);
    const seconds = ('0' + today.getSeconds()).slice(-2);

    return `${year}-${month}-${day2} ${hours}:${minutes}:${seconds}`;
  };
  const registDate2 = (day: any) => {
    const today = new Date(day);
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day2 = ('0' + today.getDate()).slice(-2);

    return `${year}-${month}-${day2}`;
  };
  return { registDate, registDate2 };
};
