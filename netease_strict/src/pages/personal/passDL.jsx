import React from 'react';
import './passDL.less';
import { NavLink, withRouter } from 'react-router-dom';


class phoneDengLu extends React.Component {
    question = () => {
        window.location.href = 'https://aq.reg.163.com/ydaq/offline'
    }

    
    render() {
        return <>
            <div className='pdingBu'>
                <NavLink to='/personal'><img src={require('../../assets/images/back.png')} alt="" /></NavLink>
                <span className='ppDtitle'>手机号登录</span>
                <span></span>
            </div>
            <p className='ptop'>
                <img src={require('../../assets/images/personal_img.png')} alt="" />
            </p>
            <div className='pcenter'>
                <input type="number" value="输入手机号" placeholder='输入手机号' autoFocus />
                <input className='ppop' type="number" value="短信验证码" placeholder='短信验证码' />
                <p className='pyanZhMa'>
                    <img src={require('../../assets/images/closeEye.png')} alt=""/>
                    </p>
                
                    <p className='ppassWord'>
                    <NavLink to='/phoneDengLu'>
                        <span>
                            使用短信验证码登录
                        </span>
                        </NavLink>
                        </p>
                
                <p className='pdengLu'>登录</p>
            </div>
            <span className='pquestion' onClick={this.question}>遇到问题？</span>
        </>
    }
}
export default phoneDengLu
