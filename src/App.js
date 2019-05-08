import React, { Component } from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
import Article from './component/business/article.jsx';
import Category from './component/business/category.jsx';
import UserInfo from './component/business/userinfo.jsx';
import Dashboard from './component/business/dashBoard.jsx';
import Column from './component/business/column.jsx';
import Comment from './component/business/comment.jsx';
import Modules from './component/business/modules.jsx';
import Setafter from './component/business/setafter.jsx';
import Setbefore from './component/business/setbefore.jsx';
import Header from './component/layout/header';
import Slider from './component/layout/slider';
import {Layout} from 'antd';
import './App.less';

const { Content } = Layout;


class App extends Component {
  constructor(props){
    super(props)
      this.state = {
      }
  }



  componentDidMount = () => {

  }

  render() {
    return (
      <div className="contentApp">
        <Header></Header>
        <Layout style={{height:'calc(100% - 64px)'}}>
          <Slider  style={{height:'100%'}} selectKeys={this.props.location.pathname}></Slider>
          <Content className='contentApp-content'>
            <Switch>
              <Route path='/app/dashboard' component={Dashboard}></Route>
              <Route path='/app/article' component={Article}></Route>
              <Route path='/app/category' component={Category}></Route>
              <Route path='/app/userInfo' component={UserInfo}></Route>
              <Route path='/app/column' component={Column}></Route>
              <Route path='/app/comment' component={Comment}></Route>
              <Route path='/app/modules' component={Modules}></Route>
              <Route path='/app/setafter' component={Setafter}></Route>
              <Route path='/app/setbefore' component={Setbefore}></Route>
              <Redirect from='/app' to='/app/dashboard' />
            </Switch>
          </Content>
        </Layout>
        
      </div> 
    )
  }
}

export default App;
