
import ReactDOM from 'react-dom';
// 引入antd
import 'antd/dist/antd.css';
import './index.css';



//引入路由
import MyRouters from './route/routes';
import * as serviceWorker from './serviceWorker';

//引入mock
require('./mock');

ReactDOM.render(MyRouters, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
