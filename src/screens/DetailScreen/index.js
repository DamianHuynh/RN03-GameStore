import React, {Component} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {BackgroundView, Text} from '../../components';
import {getRequestGameById} from '../../redux/thunk/gameThunkAction';
import {COLORS} from '../../themes/styles';
import styles from '../DetailScreen/styles.detail';

class DetailScreen extends Component {
  renderStar = () => {
    let listStar = [];
    for (let index = 1; index <= 5; index++) {
      const color =
        Math.round(this.props.game.rating) >= index
          ? COLORS.lightPurple
          : COLORS.gray;
      listStar.push(
        <AntIcon key={index} name="star" size={16} color={color} />,
      );
    }
    listStar.push(<Text key={'Text'}>{this.props.game.rating}</Text>);
    return listStar;
  };

  componentDidMount() {
    this.props.getRequestGameById(this.props.route.params.id);
  }

  render() {
    const {navigation, game} = this.props;
    if (this.props.isFetching || !game.title) {
      return (
        <BackgroundView edges={['bottom']}>
          <Text title>Loading !!!</Text>
        </BackgroundView>
      );
    }
    return (
      <BackgroundView edges={['bottom']}>
        <Image source={{uri: game.preview[0]}} style={styles.bannerContainer} />
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
            <View style={styles.starContent}>{this.renderStar()}</View>
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
      </BackgroundView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getRequestGameById: id => dispatch(getRequestGameById(id)),
});

const mapStateToProps = state => ({
  game: state.gameReducer.gameDetail,
  isFetching: state.gameReducer.isFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
