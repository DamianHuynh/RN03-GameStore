import React, {Component} from 'react';
import {StyleSheet, Text as RNText} from 'react-native';
import {COLORS} from '../../themes/styles';

export default class Text extends Component {
  render() {
    const {color = COLORS.white, children, style, title, subTitle} = this.props;
    return (
      <RNText
        {...this.props}
        style={[
          style,
          title && styles.title,
          subTitle && styles.subTitle,
          {color},
        ]}>
        {children}
      </RNText>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 12,
    opacity: 0.55,
  },
});
