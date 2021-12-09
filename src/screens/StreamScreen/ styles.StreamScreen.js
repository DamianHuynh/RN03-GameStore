import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 28,
    fontWeight: '900',
  },
  search: {
    backgroundColor: COLORS.darkGray,
    padding: 10,
    borderRadius: 20,
    paddingRight: 40,
    color: COLORS.white,
  },
  searchIcon: {position: 'absolute', top: 5, right: 10},
  popularGameContainer: {
    flex: 1,
  },
  imagePopularGame: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  liveContainer: {
    flex: 2,
  },
  liveGameBanner: {
    height: 200,
  },
});
