import React from 'react';
import { connect } from 'react-redux';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import './Banner.less';

class Banner extends React.Component {
	state = {
		data: []
	};
	componentWillMount() {
		setTimeout(() => {
			this.setState({
				data: [{
					id: 1,
					pic: 'https://yanxuan.nosdn.127.net/f1683e8ec39b6ff8ef121265269af6c0.jpg?imageView&quality=75&thumbnail=750x0',
					title: ''
				}, {
					id: 2,
					pic: 'https://yanxuan.nosdn.127.net/aa860e44fbd468a7804c1a84796c4827.jpg?imageView&quality=75&thumbnail=750x0',
					title: ''
				}, {
					id: 3,
					pic: 'https://yanxuan.nosdn.127.net/6962cab6a909ac395f4af647be0a41a2.jpg?imageView&quality=75&thumbnail=750x0',
					title: ''
				},
				{
					id: 4,
					pic: 'https://yanxuan.nosdn.127.net/a2e0f844d3b10277d18ac81544f0086c.jpg?imageView&quality=75&thumbnail=750x0',
					title: ''
				},{
					id: 5,
					pic: 'https://yanxuan.nosdn.127.net/a89846a8b31a807c230026e042516814.png?imageView&quality=75&thumbnail=750x0',
					title: ''
				},{
					id: 6,
					pic: 'https://yanxuan.nosdn.127.net/fa7a1b2ee8ad06a9b4190ba1d4776863.jpg?imageView&quality=75&thumbnail=750x0',
					title: ''
				}]
			});
		}, 1000);
	}
	render() {
		let { data } = this.state;
		return <React.Fragment>
			{data.length > 0 ? <div className='swiper-container'>
				<div className='swiper-wrapper'>
					{data.map(item => {
						return <div className="swiper-slide" key={item.id}>
							<img src={item.pic} alt='' />
						</div>;
					})}
				</div>
				<div className="swiper-pagination"></div>
			</div> : null}
		</React.Fragment>;
	}
	// 第一次加载完成后，基于DOM操作完成SWIPER运动
	componentDidUpdate() {
		if (this.swiperExample) return;
		this.swiperExample = new Swiper('.swiper-container', {
			loop: true,
			pagination: {
				el: '.swiper-pagination',
			},
			autoplay: {
				delay: 1000,
				disableOnInteraction: false
			}
		});
	}
}

export default Banner;