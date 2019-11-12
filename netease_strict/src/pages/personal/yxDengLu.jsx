import React from 'react'
import './yxDengLu.less'
import { NavLink, withRouter } from 'react-router-dom';
import redux from 'react-redux';

class yxDengLu extends React.Component {
    zhuChe = () => {
        window.location.href = 'http://localhost:3000/#/zhuChe'
    }
    forgetword = () => {
        window.location.href = 'https://reg.163.com/naq/findPassword#/verifyAccount'
    }


    constructor(props) {
        super(props);
        this.state = {
            yZM: null,
            errorPhone: null,
            errorYzM: null,
            n: null,
            yZm: null,
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
        let leg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if (!leg.test(value)) {
            this.setState({
                errorPhone: {
                    opacity: '1',
                }
            });
            return;
        };
    }

    getPhone = () => {
        this.setState({
            errorPhone: null
        })
    }

    leaveYzM = (ev) => {
        let value = ev.target.value;

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

                <p className='errorPhone' style={this.state.errorPhone}>请输入正确的邮箱
                </p>

                <input type="text" placeholder='邮箱账号或手机邮箱' autoFocus onChange={ev => { this.change(ev) }} onBlur={ev => { this.leavePhone(ev) }} onFocus={this.getPhone} />

                <p
                    className='errorYzM'
                    style={this.state.errorYzM}  >
                    请输入正确的密码
                </p>

                <input className='ypop' type="text.``" placeholder='密码' onBlur={ev => { this.leaveYzM(ev) }}
                    onFocus={this.getYzM} />

                <p className='yyanZhMa'><img src={require('../../assets/images/passeye.png')} alt="" />

                </p>
                <p className='ydengLu' >登录</p>

            </div>
            <span className='yquestion' onClick={this.forgetword}>忘记密码？</span>
        </>
    }
}

export default withRouter(yxDengLu) 