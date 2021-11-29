import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text} from '../../../components';
import {navigate} from '../../../navigation/root-navigation';
import {screenName} from '../../../utils/constant';

export default class GameItem extends Component {
  render() {
    const {gameItem} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigate(screenName.detail, {id: gameItem.id})}>
        <Image source={{uri: gameItem.preview[0]}} style={styles.banner} />
        <View
          style={[
            styles.gameInfo,
            {backgroundColor: gameItem.backgroundColor},
          ]}>
          <Image source={{uri: gameItem.icon}} style={styles.icon} />
          <View style={styles.gameInfoContent}>
            <Text title>{gameItem.title}</Text>
            <Text subTitle>{gameItem.subTitle}</Text>
          </View>
        </View>
      </TouchableOpacity>
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
