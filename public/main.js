console.log(`main.js加载成功了`);

// ----------------------------------------------------
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

// ----------------------------------------------------
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

// ----------------------------------------------------
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

// ----------------------------------------------------
// 点击得到XML内容
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

// ----------------------------------------------------
// 点击得到JSON内容
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const object = JSON.parse(request.response);
      console.log(object);
      myName.textContent = object.name;
    }
  };
  request.send();
};

// ----------------------------------------------------
// 点击加载分页
let n = 1;
getPage.onclick = () => {
  console.log(`这里有成功进行吗？`);
  const request = new XMLHttpRequest();
  // 自动增加page页
  request.open("get", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      // 得到对应page的json，然后将其转化为数组
      const array = JSON.parse(request.response);
      // 遍历数组，创造li，将item.id的值传给li，然后再将li添加到ul中
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
    }
    n += 1;
  };
  // 别忘记发送请求
  request.send();
};
