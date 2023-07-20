// 1234567890 => 1,234,567,890
export const prettifyNumber = (number) =>
  String(number).replace(/(.)(?=(\d{3})+$)/g, '$1,')
