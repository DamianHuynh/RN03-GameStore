import React, {Component} from 'react';
import {Text as RNText} from 'react-native';
import {COLORS} from '../../themes/styles';

export default class Text extends Component {
  render() {
    const {color = COLORS.white, children, style} = this.props;
    return (
      <RNText {...this.props} style={[style, {color}]}>
        {children}
      </RNText>
    );
  }
}
