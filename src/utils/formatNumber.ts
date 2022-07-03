function formatNumber(num: number) {
  if (num < 10000) {
    return num;
  } else if (num < Math.pow(10, 8)) {
    return (num / Math.pow(10, 4)).toFixed(2) + "万";
  } else {
    return (num / Math.pow(10, 8)).toFixed(2) + "亿";
  }
}

export default formatNumber;
