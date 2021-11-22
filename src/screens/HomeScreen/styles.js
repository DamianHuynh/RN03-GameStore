import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/styles';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  headerText: {
    fontSize: 30,
  },
  fontBold: {
    fontWeight: '800',
  },
  avatar: {
    backgroundColor: COLORS.lightPurple,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
