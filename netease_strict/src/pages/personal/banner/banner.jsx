import React from 'react';
import PropTypes from 'prop-types';



class Banner extends React.Component {

    static defaultProps = {
        interval: 1000,
        speed: 500,
        activeIndex: 0,
    }
    static propTypes = {
        data: PropTypes.array.isRequired,
        interval: PropTypes.number,
        speed: PropTypes.number,
        activeIndex: PropTypes.number,
    };

    constructor(props) {
        super(props);
        let { arr, activeIndex, speed } = this.props;
        arr.push({
            ...arr[0]
        })
        this.state = {
            activeIndex,
            speed,
            arr,
        };
    }
    autoMove = () => {
        let { activeIndex, arr} = this.state;
        activeIndex++;
        if(activeIndex===arr.length){
            this.setState({
                activeIndex:0,
            });
        activeIndex=1;
        }
        this.setState({
            activeIndex,
            speed:this.props.speed
        });

    }

    componentDidMount() {
        this.timer= setInterval(this.autoMove, this.props.interval);

    }
    render() {
        let { arr, activeIndex, speed } = this.state,
            wrapperSty = {
                scale:1.5,
                transition: `scale ${speed}ms linear`,
                zIndex: 1,
                transition: `zIndex ${speed}ms linear`,
                opacity: 1,
                transition: `opacity ${speed}ms linear`,
            };
        return <>
            {arr.map((item, index) => {
                return <img src={item.pic} key={item.id} style={activeIndex === index ? wrapperSty : null}  alt="" />
            })}
        </>
    }
}



export default Banner