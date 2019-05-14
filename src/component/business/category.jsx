import React from 'react';
import '../../style/business/category.less'
import {Input,Button} from 'antd'

class Category extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    componentDidMount = () => {
        
    }

    render(){
        return (
            <div className='categoryContent'>
                <div>
                    <Input placeholder='请输入分类名字' style={{width:300,marginRight:'20px'}} />
                    <Button type='primary'>添加分类</Button>
                </div>
                <div className='categoryList'>

                </div>
            </div>
        )
    }
}

export default Category