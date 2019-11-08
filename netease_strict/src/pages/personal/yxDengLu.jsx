import React from 'react'
import './yxDengLu.less'
import { NavLink, withRouter } from 'react-router-dom';
class yxDengLu extends React.Component {
    zhuChe = () => {
        window.location.href = 'http://localhost:3000/#/zhuChe'
    }
    forgetword = () => {
        window.location.href = 'https://reg.163.com/naq/findPassword#/verifyAccount'
    }

 
    render() {
        return <>
            <div className='ydingBu'>
                <NavLink to='/personal'> <img src={require('../../assets/images/back.png')} alt="" /></NavLink>
                <span className='ypDtitle'>邮箱账号登录</span>
                <span className='yzhuCe' onClick={this.zhuChe}>注册</span>
            </div>
            <p className='ytop'>
                <img src={require('../../assets/images/personal_img.png')} alt="" />
            </p>
            <div className='ycenter'>
                <input type="text"  placeholder='邮箱账号或手机邮箱'  autoFocus  />
                <input className='ypop' type="text.``"  placeholder='密码' />
                <p className='yyanZhMa'><img src={require('../../assets/images/passeye.png')} alt="" />
                </p>
                <p className='ydengLu'>登录</p>
            </div>
            <span className='yquestion' onClick={this.forgetword}>忘记密码？</span>
        </>
    }
}

export default withRouter(yxDengLu) 