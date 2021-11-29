import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {BackgroundView, Text} from '../../components';
import {getRequestListGame} from '../../redux/thunk/gameThunkAction';
import GameItem from './components/GameItem';
import styles from './styles';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getRequestListGame();
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
  getRequestListGame: () => dispatch(getRequestListGame()),
});

const mapStatesToProps = state => ({
  listGame: state.gameReducer.listGame,
  isFetching: state.gameReducer.isFetching,
});

export default connect(mapStatesToProps, mapDispatchToProps)(HomeScreen);
