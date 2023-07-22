export default ({ method, url, params }) => {
  console.log("ajax被调用了");
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    // 如果是get请求则需要拼接参数
    if (method.toLowerCase() === "get") {
      const arr = [];
      for (const key in params) {
        arr.push(key + "=" + params[key]);
      }
      url = url + "?" + arr.join("&");
      xhr.open(method, url);
    }
    // 如果是post请求，转换JS对象为JSON
    if (method.toLowerCase() === "post") {
      xhr.open(method, url);
      xhr.send(JSON.stringify(params));
    }

    // 监听返回
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status > 200 && (xhr.status < 300) | (xhr.status === 304)) {
          const data = JSON.parse(xhr.responseText);
          resolve(data);
        }
      }
    };
  });
};
