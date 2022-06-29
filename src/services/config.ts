let BASE_URL = "";
let TIME_OUT = 5000;

if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://123.207.32.32:9001";
} else {
  BASE_URL = "http://123.207.32.32:9001";
}

export { BASE_URL, TIME_OUT };
