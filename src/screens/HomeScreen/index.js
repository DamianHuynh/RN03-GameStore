import axios from 'axios';
import React, {Component} from 'react';
import {View, Image, FlatList} from 'react-native';
import {getListGame} from '../../api';
import {BackgroundView, Text} from '../../components';
import {mapIP} from '../../utils/common';
import {screenName} from '../../utils/constant';
import GameItem from './components/GameItem';
import styles from './styles';

export default class HomeScreen extends Component {
  state = {
    listGame: [],
    gameDetail: {},
    loading: true,
  };

  componentDidMount() {
    //10.0.2.2
    getListGame()
      .then(result => {
        const listGame = mapIP(result.data);
        this.setState({listGame, loading: false});
      })
      .catch(err => {
        console.log(err);
        this.setState({loading: false});
      });
  }

  render() {
    const {navigation} = this.props;
    const {listGame, loading} = this.state;
    return (
      <BackgroundView edges={['top']}>
        {!loading && (
          <>
            <View style={styles.headerContainer}>
              <View>
                <Text style={styles.headerText}>
                  Hello <Text style={styles.fontBold}>CyberSoft</Text>
                </Text>
                <Text>Best game for today</Text>
              </View>
              <View style={styles.avatar} />
            </View>

            <FlatList
              data={listGame}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <GameItem
                  gameItem={item}
                  onPress={() =>
                    navigation.navigate(screenName.detail, {id: item.id})
                  }
                />
              )}
              ItemSeparatorComponent={() => <View style={{height: 70}} />}
              contentContainerStyle={{paddingBottom: 100}}
            />

            {/* <GameItem gameItem={gameDetail} /> */}
          </>
        )}
      </BackgroundView>
    );
  }
}
