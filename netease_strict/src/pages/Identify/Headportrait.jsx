import React from 'react';
import './Headportrait.less';

class Identify extends React.Component {
  render() {
    return <>
      <div className="Headportrait">
        <div className="Headportrait-Img">
          <span>
          <img src="https://yanxuan.nosdn.127.net/df63520ec927ac17a5c1f6bf1702408a.jpg?imageView&quality=65&thumbnail=56y56" alt="" />
          </span>
          <span>选妹</span>
        </div>
        <div className="Headportrait-text">
        双11、黑五有哪些不能错过的好东西？一定要看的购物季必买清单！
        </div>
        <div className="Headportrait-desc">
        <img src="https://yanxuan.nosdn.127.net/602ce4ac685a02279b6671753c342ba5.jpg?imageView&quality=65&thumbnail=690y376" className="Identify-img" />
        </div>
       
      </div>
		</>
  }
}

export default Identify;