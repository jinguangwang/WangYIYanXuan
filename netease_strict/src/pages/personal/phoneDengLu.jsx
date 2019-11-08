import React from 'react';
import './phoneDengLu.less';

import { NavLink, withRouter } from 'react-router-dom';

import passDL from './passDL.jsx';

class phoneDengLu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            yZM:null,
        }
    }

    question = () => {
        window.location.href = 'https://aq.reg.163.com/ydaq/offline'
    }
    change=(ev)=>{
        if(ev.target.value){
            this.setState({
                yZM:{
                    border:' 0.01rem solid rgba(0, 0,0,.4)',
                    color: 'rgba(0,0,0,.6)',
                }
            })
        }
    }
    leave=(ev)=>{
   
    }

    render() {
        return <> 
            <div className='sdingBu'>
                <NavLink to='/personal'><img src={require('../../assets/images/back.png')} alt="" /></NavLink>
                <span className='spDtitle'>手机号登录</span>
                <span></span>
            </div>
            <p className='stop'>
                <img src={require('../../assets/images/personal_img.png')} alt="" />
            </p>
            <div className='scenter'>

                <input type="number"  placeholder='输入手机号' autoFocus ref={x=>          {this.phone=x}} onChange={ev=>{this.change(ev)}} onMouseLeave={ev=>{this.leave(ev)}} />

                <input className='spop' type="number"  placeholder='短信验证码' />

                <p className='syanZhMa' ref={x=>{this.yanZhengMa=x}} style={this.state.yZM}>获取验证码</p>
              
                <p className='spassWord'> 
                 <NavLink to='/passDL'>
                     <span>使用密码登录</span> 
                     </NavLink>
                     </p> 
              
                <p className='sdengLu'>登录</p>
            </div>
            <span className='squestion' onClick={this.question}>遇到问题？</span>

        </>
    }
}
export default withRouter(phoneDengLu) 
