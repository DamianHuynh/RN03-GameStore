import axios from 'axios';
import React, {Component} from 'react';
import {View, Image, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getListGame} from '../../api';
import {BackgroundView, Text} from '../../components';
import {
  getRequest,
  getRequestFail,
  getRequestSuccess,
  setListGame,
} from '../../redux/actions/gameActions';
import {mapIP} from '../../utils/common';
import {screenName} from '../../utils/constant';
import GameItem from './components/GameItem';
import styles from './styles';

class HomeScreen extends Component {
  componentDidMount() {
    //10.0.2.2
    this.props.getRequest();
    getListGame()
      .then(result => {
        const listGame = mapIP(result.data);
        this.props.setListGame(listGame);
        this.props.getRequestSuccess();
      })
      .catch(err => {
        console.log(err);
        this.props.getRequestFail();
      });
  }

  render() {
    const {listGame} = this.props;
    return (
      <BackgroundView edges={['top']}>
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
          renderItem={({item}) => <GameItem gameItem={item} />}
          ItemSeparatorComponent={() => <View style={{height: 70}} />}
          contentContainerStyle={{paddingBottom: 100}}
        />
      </BackgroundView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setListGame: listGame => dispatch(setListGame(listGame)),
  getRequest: () => dispatch(getRequest()),
  getRequestSuccess: () => dispatch(getRequestSuccess()),
  getRequestFail: () => dispatch(getRequestFail()),
});

const mapStatesToProps = state => ({
  listGame: state.gameReducer.listGame,
  isFetching: state.gameReducer.isFetching,
});

export default connect(mapStatesToProps, mapDispatchToProps)(HomeScreen);
