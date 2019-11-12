import React from 'react';
import './phoneDengLu.less';

import { NavLink, withRouter } from 'react-router-dom';

import passDL from './passDL.jsx';

class phoneDengLu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yZM: null,
            errorPhone: null,
            errorYzM: null,
            n: null,
            yZm: null,
            taiOne:false,
            taiTwo:false,
        }
    }

    question = () => {
        window.location.href = 'https://aq.reg.163.com/ydaq/offline'
    }

    change = (ev) => {
        if (ev.target.value) {
            this.setState({
                yZM: {
                    border: ' 0.01rem solid rgba(0, 0,0,.4)',
                    color: 'rgba(0,0,0,.6)',
                }
            })
        }
    }
    
    leavePhone = (ev) => {
        let value = ev.target.value;
        let leg = /^1\d{10}$/;
        if (!leg.test(value)) {
            this.setState({
                errorPhone: {
                    opacity: '1',
                }
            });
            return true;
        };
        this.setState({
            taiOne:true,
        })
    }

    getPhone = () => {
        this.setState({
            errorPhone: null
        })
    }

    leaveYzM = (ev) => {
        let value = ev.target.value;
        if (!(parseInt(value) == parseInt(this.state.n))) {
            console.log('1')
            this.setState({
                errorYzM: {
                    opacity: '1',
                }
               
            })
        }
        this.setState({
            taiTwo:true,
        })
        return ;
    }

    getYzM = () => {
        this.setState({
            errorYzM: null
        })
    }

    getNumber = () => {
        let arr = Math.random(),
            m = Math.round(arr * 1000000)
            this.setState({
                n: m,
                yZm: {
                    opacity: '1',

                }
            })

    }
    
    enter=()=>{
        console.log(this.state.taiOne,this.state.taiTwo)
        if(this.state.taiOne&&this.state.taiTwo){
            window.location.href='http://localhost:3000/#/souYe';
            this.setState({
                taiOne:false,
                taiTwo:false,
            })
        }
        

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
                
                <p className='errorPhone' style={this.state.errorPhone}>请输入正确的手机号
                </p>

                <input type="number" placeholder='输入手机号' autoFocus  onChange={ev => { this.change(ev) }} onBlur={ev => { this.leavePhone(ev) }} onFocus={this.getPhone}  ref={x=>{this.number=x}}/>

                <p
                    className='errorYzM'
                    style={this.state.errorYzM}  >
                    请输入正确的验证码
                </p>

                <p
                    className='yZm'
                    style={this.state.yZm}>
                    验证码为：{this.state.n}
                </p>

                <input
                    className='spop'
                    type="number" placeholder='短信验证码'
                    onBlur={ev => { this.leaveYzM(ev) }}
                    onFocus={this.getYzM}
                />

                <p
                    className='syanZhMa'
                    style={this.state.yZM}
                    onClick={this.getNumber}
                >
                    获取验证码
                    </p>

                <p className='spassWord'>
                    <NavLink to='/passDL'>
                        <span >使用密码登录</span>
                    </NavLink>
                </p>

                <p className='sdengLu' onClick={this.enter}>登录</p>
            </div>
            <span className='squestion' onClick={this.question}>遇到问题？</span>

        </>
    }
}
export default withRouter(phoneDengLu) 
