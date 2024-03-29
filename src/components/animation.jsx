import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../animation/deliveryman-riding-scooter.json'
class Animation extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            renderer: 'svg'
        }
        return (
            <div>
               <Lottie
                options={defaultOptions}
                height={450}
                width={500}
               />
            </div>
        )
    };  
}
export default Animation;