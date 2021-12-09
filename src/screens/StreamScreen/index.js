import React, {useEffect, useState} from 'react';
import {View, TextInput, FlatList, Image, ImageBackground} from 'react-native';
import styles from './ styles.StreamScreen';
import {BackgroundView, Text} from '../../components/index';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../themes/styles';
import {getListGame} from '../../api';
import {mapIP} from '../../utils/common';
import {useDispatch, useSelector} from 'react-redux';
import {getRequestListGame} from '../../redux/thunk/gameThunkAction';
import {getListGameSelector} from '../../redux/selectors/gameSelector';

const StreamScreen = () => {
  // const [listGame, setListGame] = useState([]);
  const dispatch = useDispatch();
  const listGame = useSelector(getListGameSelector);

  useEffect(() => {
    // getListGame().then().catch()

    // (async () => {
    //   try {
    //     const result = await getListGame();
    //     setListGame(mapIP(result.data));
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();

    dispatch(getRequestListGame());
  }, []);

  return (
    <BackgroundView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Streaming</Text>
        <View>
          <TextInput
            placeholder="Search here..."
            placeholderTextColor={COLORS.opacityWhite}
            style={styles.search}
          />
          <AntIcon
            style={styles.searchIcon}
            name="search1"
            color={COLORS.white}
            size={25}
          />
        </View>
      </View>
      <View style={styles.popularGameContainer}>
        <Text>Popular Game</Text>
        <FlatList
          style={{flexGrow: 0, marginTop: 10}}
          horizontal
          data={listGame}
          ItemSeparatorComponent={() => <View style={{width: 20}} />}
          renderItem={({item}) => (
            <Image style={styles.imagePopularGame} source={{uri: item.icon}} />
          )}
        />
      </View>
      <View style={styles.liveContainer}>
        <FlatList
          data={listGame}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          renderItem={({item}) => (
            <ImageBackground
              style={styles.liveGameBanner}
              source={{uri: item.preview[0]}}
            />
          )}
        />
      </View>
    </BackgroundView>
  );
};

export default StreamScreen;
