console.log(`js成功了`);

// 点击得到html样式
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  //注意这里打开的路径是server.js里path的路径
  request.open("get", "/3.html");
  request.onload = () => {
    console.log("请求HTML成功了");
    console.log(request.response);
    const div = document.createElement("div");
    // 把js里的内容，放入script标签中
    div.innerHTML = request.response;
    // Node.appendChild() 方法将一个节点附加到指定父节点的子节点列表的末尾处
    document.body.appendChild(div);
  };
  request.onerror = () => {
    console.log("request onerror");
  };
  request.send();
};

// 点击得到js样
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  //注意这里打开的路径是server.js里path的路径
  request.open("get", "/2.js");
  request.onload = () => {
    console.log("请求js成功了");
    console.log(request.response);
    const script = document.createElement("script");
    // 把js里的内容，放入script标签中
    script.innerHTML = request.response;
    // Node.appendChild() 方法将一个节点附加到指定父节点的子节点列表的末尾处
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("request onerror");
  };
  request.send();
};

// 点击得到css样式
getCSS.onclick = (e) => {
  console.log(e);
  console.log("这里成功吗");
  const request = new XMLHttpRequest();
  // 这里是网页输入时的路径吗？跟server.js里的path路径一致
  request.open("get", "/style.css");

  request.onload = () => {
    console.log("request onload");
    const style = document.createElement("style");
    style.innerHTML = request.response;
    document.head.appendChild(style);
  };

  request.onerror = () => {
    console.log("request onerror");
  };

  request.send();
};
