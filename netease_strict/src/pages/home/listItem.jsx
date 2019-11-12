import React from 'react';
import './listItem.less'

export default function ListItem() {
    return   <div className="listItem">
                <div className="list_div" >
                    <ul className="list_ul">
                        <li className="list_li">
                            <a href="">
                                <img className="item_pic" src="https://yanxuan-item.nosdn.127.net/65ea6f88c2323afd86107529fe2e0b2f.png?imageView&quality=65&thumbnail=330x330" alt=""/>
                            </a>
                            <div className="list_ulDiv">
                                
                                <div className="list_haowu">
                                    <span className="hao_sp1">好物内部价</span>
                                    <span className="hao_sp2">¥399</span>
                                </div>
                                <div className="list_oneDay">
                                    仅剩一天
                                </div>
                            </div>
                            <span className="list_sp1">60s臻密绒磨毛四件套
                            </span>
                            <span className="list_sp2">$399
                                <del>¥499</del>
                            </span>
                            <div className="list_neibujia">
                                好货内部价
                            </div>
                        </li> 
                        <li className='list_li'>
                            <a href="">
                            <img className="item_pic" src="https://yanxuan-item.nosdn.127.net/6b1f7d38b92d931766e2a36e79abcfc6.png?imageView&quality=65&thumbnail=330x330" alt=""/>
                            </a>
                            <div className="list_ulDiv">
                                
                                <div className="list_haowu">
                                    <span className="hao_sp1">好物内部价</span>
                                    <span className="hao_sp2">¥399</span>
                                </div>
                                <div className="list_oneDay">
                                    仅剩一天
                                </div>
                            </div>
                            <span className="list_sp1">60s臻密绒磨毛四件套
                            </span>
                            <span className="list_sp2">$399
                                <del>¥499</del>
                            </span>
                            <div className="list_neibujia">
                                好货内部价
                            </div>
                        </li>
                    </ul>
                </div>

                <div >
                </div>   
              </div>
    
}