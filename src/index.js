import React from 'react';
import ReactDOM from 'react-dom';

import icon3 from './assets/img/icon-3.png';
import icon48 from './assets/img/icon-48.png';

// 将要被渲染的组件(HTML 标签代码块)
var element = (
    <div>
        <h2>hello 世界</h2>
        <img src="https://img.alicdn.com/tfs/TB1qEwuzrj1gK0jSZFOXXc7GpXa-32-32.ico" alt="支付宝icon"/>
        <img src={icon3}/>
        <img src={icon48}/>
    </div>
);

// 获取 DOM 中的节点作为父容器
const container = document.getElementById('root');

// 渲染 element 到 container 上
ReactDOM.render(element, container);


// 5 秒后自动卸载组件
// setTimeout(function() {
//     ReactDOM.unmountComponentAtNode(container);
// }, 5000);