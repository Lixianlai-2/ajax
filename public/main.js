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
    console.log(request.readyState);
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
  console.log("getCSS成功了吗");
  const request = new XMLHttpRequest();
  // 这里是网页输入时的路径吗？跟server.js里的path路径一致
  request.open("get", "/style.css");

  request.onreadystatechange = () => {
    // 注意，这里是用的箭头函数，所有不能直接用this.readyState，不然是返回undefined
    console.log(request.readyState);
    // readyState为4时下载完成，然后通过请求的status判断是否请求成功
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      }
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      console.log(request.responseXML);
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const Object = JSON.parse(request.response);
      console.log(Object);
    }
  };
  request.send();
};
