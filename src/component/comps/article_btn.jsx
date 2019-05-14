import React from 'react';
import {Button, Divider} from 'antd'

class ArticleBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Button type="link">查看</Button>
        <Divider type='vertical'/>
        <Button type="link">禁止评论</Button>
        <Divider type='vertical'/>
        <Button type="link">置顶</Button>
        <Divider type='vertical'/>
        <Button type="link" style={{
          color: 'red'
        }}>删除</Button>
      </div>
    )
  }
}

export default ArticleBtn