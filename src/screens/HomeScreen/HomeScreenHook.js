import React, {Component, useEffect} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {BackgroundView, Text} from '../../components';
import withLoading from '../../HOC/withLoading';
import {
  getIsFetchSelector,
  getListGameSelector,
} from '../../redux/selectors/gameSelector';
import {getRequestListGame} from '../../redux/thunk/gameThunkAction';
import {COLORS} from '../../themes/styles';
import GameItem from './components/GameItem';
import styles from './styles';

const BackgroundViewLoading = withLoading(BackgroundView);

const HomeScreen = () => {
  const dispatch = useDispatch();
  const listGame = useSelector(getListGameSelector);
  const isFetching = useSelector(getIsFetchSelector);

  useEffect(() => {
    console.log('HomeScreenHook');
    dispatch(getRequestListGame());
  }, []);

  return (
    <BackgroundViewLoading edges={['top']} isFetching={isFetching}>
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
    </BackgroundViewLoading>
  );
};

export default HomeScreen;
