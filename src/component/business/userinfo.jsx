import React from 'react';
import { Button,Icon } from 'antd';
import StarsDrawer from '../comps/starsDrawer'

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        drawerVisible:false,
    }
  }

  onBtnAdd(){
    this.setState({
        drawerVisible:true
      })
  }

  render() {
    const _this = this
    const drawerVisible = this.state.drawerVisible
    const drawerProps = {
        dataSouce:{},
        drawerVisible,
        onClose(){
          _this.setState({
            drawerVisible:!drawerVisible
          })
        }   
      } 
    return (
      <div>
        <Button type='primary' onClick={this
          .onBtnAdd
          .bind(this)}><Icon type='plus-circle-o' key="a"/>添加</Button>
          {this.state.drawerVisible && <StarsDrawer {...drawerProps} />}
      </div>
    )
  }
}

export default Article