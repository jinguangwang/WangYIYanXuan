import React from 'react'
import './zhuChe.less'
import { NavLink, withRouter } from 'react-router-dom';
class yxDengLu extends React.Component {
    render() {
        return <>
            <div className='zdingBu'>
                <NavLink to='/yxDengLu'> <img src={require('../../assets/images/back.png')} alt="" /></NavLink>
                <span className='zpDtitle'>注册</span>
            </div>
            <div className='top'>
                <input type="text" placeholder='6-185位字母数字组合' className='zhangHao' autoFocus />
                <span className='wangZhi'> @163.com</span>
            </div>

            <input type="text" placeholder='8-16位字母数字字符组合密码' className='password' />
            <img className='xiaLaBiao' src={require('../../assets/images/xiaLaBiao.png')} alt="" />
            <img className='eye' src={require('../../assets/images/passeye.png')} alt="" />

            <p className='yanZheng'>
                <img className='click' src={require('../../assets/images/click.png')} alt="" />
                <span className='yanZ'>点此进行验证</span>
            </p>

            <p className='next'>下一步</p>
            <div className='bottom'>
                <input type="Checkbox" className='button' />
                <p className='tiaoKuan'>
                    用户注册即代表同意
                <span>《服务条款》</span>
                    和
                <span>《网易隐私政策》</span>
                </p>
            </div>


        </>
    }
}

export default yxDengLu