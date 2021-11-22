import axios from 'axios';
import React, {Component} from 'react';
import {View, Image, FlatList} from 'react-native';
import {BackgroundView, Text} from '../../components';
import {mapIP} from '../../utils/common';
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
    axios({method: 'GET', url: 'http://localhost:3000/games'})
      .then(result => {
        const listGame = mapIP(result.data);
        // const icon = gameDetail.icon.replace('localhost', '10.0.2.2');
        // const preview = gameDetail.preview.map(item =>
        //   item.replace('localhost', '10.0.2.2'),
        // );
        console.log('gameDetail Change IP', listGame);
        this.setState({listGame, loading: false});
      })
      .catch(err => {
        console.log(err);
        this.setState({loading: false});
      });
  }

  render() {
    const {listGame, loading} = this.state;
    return (
      <BackgroundView>
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
              renderItem={({item}) => <GameItem gameItem={item} />}
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
