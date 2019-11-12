import React from 'react';
import './passDL.less';
import { NavLink, withRouter } from 'react-router-dom';


class phoneDengLu extends React.Component {
    question = () => {
        window.location.href = 'https://aq.reg.163.com/ydaq/offline'
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
        let leg = /^1\d{10}$/;
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
        if (!(parseInt(value) == parseInt(this.state.n))) {
            console.log('1')
            this.setState({
                errorYzM: {
                    opacity: '1',
                }

            })
        }
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
            <div className='pdingBu'>
                <NavLink to='/personal'><img src={require('../../assets/images/back.png')} alt="" /></NavLink>
                <span className='ppDtitle'>手机号登录</span>
                <span></span>
            </div>
            <p className='ptop'>
                <img src={require('../../assets/images/personal_img.png')} alt="" />
            </p>
            <div className='pcenter'>

                <p className='errorPhone' style={this.state.errorPhone}>请输入正确的手机号
                </p>

                <input type="number" placeholder='输入手机号' autoFocus  onChange={ev => { this.change(ev) }} onBlur={ev => { this.leavePhone(ev) }} onFocus={this.getPhone}/>

                <p
                    className='errorYzM'
                    style={this.state.errorYzM}  >
                    请输入正确的密码
                </p>

                <input className='ppop' type="number" placeholder='密码' onBlur={ev => { this.leaveYzM(ev) }}
                    onFocus={this.getYzM}/>



                <p className='pyanZhMa'>
                    <img src={require('../../assets/images/closeEye.png')} alt="" />
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
