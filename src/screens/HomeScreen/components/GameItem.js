import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text} from '../../../components';

export default class GameItem extends Component {
  render() {
    const {gameItem} = this.props;
    return (
      <View>
        <Image source={{uri: gameItem.preview[0]}} style={styles.banner} />
        <View
          style={[
            styles.gameInfo,
            {backgroundColor: gameItem.backgroundColor},
          ]}>
          <Image source={{uri: gameItem.icon}} style={styles.icon} />
          <View style={styles.gameInfoContent}>
            <Text>{gameItem.title}</Text>
            <Text>{gameItem.subTitle}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
  },
  gameInfo: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    position: 'absolute',
    left: 20,
    bottom: -50,
  },
  icon: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  gameInfoContent: {
    width: '70%',
  },
});
