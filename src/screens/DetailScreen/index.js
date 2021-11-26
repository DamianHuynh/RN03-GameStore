import React, {Component} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {getGameById} from '../../api';
import {BackgroundView, Text} from '../../components';
import {COLORS} from '../../themes/styles';
import {mapIP} from '../../utils/common';
import styles from '../DetailScreen/styles.detail';

export default class DetailScreen extends Component {
  state = {
    game: {},
    loading: true,
  };

  renderStar = () => {
    let listStar = [];
    for (let index = 1; index <= 5; index++) {
      const color =
        Math.round(this.state.game.rating) >= index
          ? COLORS.lightPurple
          : COLORS.gray;
      listStar.push(<AntIcon name="star" size={16} color={color} />);
    }
    listStar.push(<Text>{this.state.game.rating}</Text>);
    return listStar;
  };

  componentDidMount() {
    getGameById(this.props.route.params.id)
      .then(res => {
        const game = mapIP(res.data);
        this.setState({game, loading: false});
      })
      .catch(error => {
        this.setState({loading: false});
        console.log(error);
      });
  }

  render() {
    console.log(Math.round(4.1));
    const {loading, game} = this.state;
    const {navigation} = this.props;
    return (
      <BackgroundView edges={['bottom']}>
        {!loading && (
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
                  <AntIcon
                    name="clouddownloado"
                    color={COLORS.white}
                    size={30}
                  />
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
          </>
        )}
      </BackgroundView>
    );
  }
}
