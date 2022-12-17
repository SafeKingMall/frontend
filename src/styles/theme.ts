const palette = {
  green: '#289951',
  darkgreen: '#b1c7b9',
  lightgreen: '#a9d6b9',
  txt: '#212121',
  txtblack: '#333333',
  txtgray: '#999999',
  lightgray: '#efeff1',
};
const common = {
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexEnd: `
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
  flexAround: `
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  flexSpaceBetWeen: `
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  flexColumnStart: `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `,
};

const theme = {
  palette,
  common,
};

export default theme;
