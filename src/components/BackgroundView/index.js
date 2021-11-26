import React, {Component} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../themes/styles';

export default class BackgroundView extends Component {
  render() {
    const {edges} = this.props;
    return (
      <SafeAreaView style={styles.container} edges={edges}>
        <StatusBar barStyle="light-content" />
        {this.props.children}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBack,
  },
});
