import React from 'react';
import Lottie from 'react-lottie';
import animationData from './Animation - 1717578906820.json'; 

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{background:'rgb(15,22,36)',cursor:'pointer'}}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LottieAnimation;
