import React from 'react';
import LottieView from 'lottie-react-native';
import {BackgroundView} from '../../components';
import {COLORS} from '../../themes/styles';
import {loadingAnimation} from '../../assets';

const withLoading =
  Component =>
  ({isFetching, children, ...props}) => {
    if (isFetching) {
      return (
        <BackgroundView
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView source={loadingAnimation} autoPlay loop />
        </BackgroundView>
      );
    }
    return <Component {...props}>{children}</Component>;
  };

export default withLoading;
