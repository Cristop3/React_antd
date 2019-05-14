import React from 'react';
import '../../style/comps/article_list.less';
import {Icon, Badge} from 'antd';

import axios from '../../axios/axios';
import ArticleBtn from './article_btn.jsx';

class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allList: []
    }
  }

  componentDidMount = () => {
    let _this = this;
    axios
      .getMockData('/rest/data',this.props.type)
      .then(function (res) {
        _this.setState({allList: res.data})
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  render() {
    const list = this
      .state
      .allList
      .map((item, index) => <div key={index}>
        <div className='singleArt-item'>
          <div className='singleArt-item-title'>
            <Badge
              count={index + 1}
              style={{
              backgroundColor: '#40a9ff'
            }}/>
            <p className='singleArt-item-title-txt'>{item.Paragraph}</p>
          </div>
          <div className='singleArt-item-info'>
            <div className='singleArt-item-info-left'>
              <span>原创</span>
              <span>{item.Date}</span>
              <span><Icon type='mail' style={{
        width: 17,
        height: 17
      }}/>{item.Natural}</span>
              <span><Icon type='mail' style={{
        width: 17,
        height: 17
      }}/>{item.Integer}</span>
            </div>
            <div className='singleArt-item-info-handle'>
              <ArticleBtn></ArticleBtn>
            </div>
          </div>
        </div>

      </div>)
    return (
      <div className='listContent'>
        {list}
      </div>
    )
  }
}

export default ArticleList