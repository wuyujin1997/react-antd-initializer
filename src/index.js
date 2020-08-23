import React from 'react';
import ReactDOM from 'react-dom';

// 为避免每编写一个组件都要引入antd的样式文件，在入口处引入一次即可。
import 'antd/dist/antd.css';

import './assets/css/index.css';
// require('./assets/css/index.css');

import icon3 from './assets/img/icon-3.png';
import icon48 from './assets/img/icon-48.png';

import AntDesignDemo from './components/AntDesignDemo';

// 将要被渲染的组件(HTML 标签代码块)
var element = (
    <div>
        <h2>hello 世界</h2>
        <img src="https://img.alicdn.com/tfs/TB1qEwuzrj1gK0jSZFOXXc7GpXa-32-32.ico" alt="支付宝icon"/>
        <img src={icon3}/>
        <img src={icon48}/>
    </div>
);

element = ( <AntDesignDemo />);

// 获取 DOM 中的节点作为父容器
const container = document.getElementById('root');

// 渲染 element 到 container 上
ReactDOM.render(element, container);


// 5 秒后自动卸载组件
// setTimeout(function() {
//     ReactDOM.unmountComponentAtNode(container);
// }, 5000);