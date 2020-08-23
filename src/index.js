import React from 'react';
import ReactDOM from 'react-dom';

// 将要被渲染的组件(HTML 标签代码块)
var element = (
    <div>
        <h2>hello 世界</h2>
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