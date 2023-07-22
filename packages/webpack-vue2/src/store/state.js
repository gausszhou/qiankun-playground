import Cookies from "js-cookie";
export default {
  rootCount: 10,
  testObj: { a: { b: { c: 50 } } },
  test: "1",
  flagObject: { flag: true },
  language: Cookies.get("language") || "en"
};
