import React, {Component, useEffect} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {connect, useDispatch, useSelector} from 'react-redux';
import {BackgroundView, Text} from '../../components';
import withLoading from '../../HOC/withLoading';
import {
  getGameDetailSelector,
  getIsFetchSelector,
} from '../../redux/selectors/gameSelector';
import {getRequestGameById} from '../../redux/thunk/gameThunkAction';
import {COLORS} from '../../themes/styles';
import styles from '../DetailScreen/styles.detail';

const BackgroundViewLoading = withLoading(BackgroundView);

const DetailScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const game = useSelector(getGameDetailSelector);
  const isFetching = useSelector(getIsFetchSelector);

  const renderStar = () => {
    let listStar = [];
    for (let index = 1; index <= 5; index++) {
      const color =
        Math.round(game.rating) >= index ? COLORS.lightPurple : COLORS.gray;
      listStar.push(
        <AntIcon key={index} name="star" size={16} color={color} />,
      );
    }
    listStar.push(<Text key={'Text'}>{game.rating}</Text>);
    return listStar;
  };

  useEffect(() => {
    dispatch(getRequestGameById(route.params.id));
  }, []);

  // componentDidMount() {
  //   this.props.getRequestGameById(this.props.route.params.id);
  // }

  return (
    <BackgroundViewLoading edges={['bottom']} isFetching={isFetching}>
      {!!game.title && (
        <>
          <Image
            source={{uri: game.preview[0]}}
            style={styles.bannerContainer}
          />
          <TouchableOpacity
            style={styles.iconBack}
            onPress={() => navigation.goBack()}>
            <AntIcon name="close" color={COLORS.white} size={30} />
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            <View style={styles.topInfoContent}>
              <Image source={{uri: game.icon}} style={styles.iconGame} />
              <View style={styles.topInfoTextContent}>
                <Text title>{game.title}</Text>
                <Text subTitle>{game.subTitle}</Text>
              </View>
              <View style={styles.downloadIcon}>
                <AntIcon name="clouddownloado" color={COLORS.white} size={30} />
              </View>
            </View>
            <View style={styles.botInfoContent}>
              <View style={styles.starContent}>{renderStar()}</View>
              <Text>{game.age}</Text>
              <Text>Game for the day</Text>
            </View>
          </View>
          <View style={styles.previewContainer}>
            <FlatList
              snapToInterval={350}
              decelerationRate="fast"
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingRight: 15}}
              style={styles.listPreview}
              data={game.preview}
              renderItem={({item}) => (
                <Image source={{uri: item}} style={styles.previewItem} />
              )}
              ItemSeparatorComponent={() => <View style={{width: 30}} />}
            />
            <Text subTitle>{game.description}</Text>
          </View>
        </>
      )}
    </BackgroundViewLoading>
  );
};

const mapDispatchToProps = dispatch => ({
  getRequestGameById: id => dispatch(getRequestGameById(id)),
});

const mapStateToProps = state => ({
  game: state.gameReducer.gameDetail,
  isFetching: state.gameReducer.isFetching,
});

export default DetailScreen;
