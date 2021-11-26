import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/styles';

export default StyleSheet.create({
  bannerContainer: {
    flex: 2,
    width: '100%',
  },
  iconBack: {
    position: 'absolute',
    top: 20,
    left: 10,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.opacityBlack,
    borderRadius: 25,
  },
  infoContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  topInfoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  iconGame: {
    height: 80,
    width: 80,
    borderRadius: 8,
    shadowColor: COLORS.white,
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topInfoTextContent: {
    width: '60%',
  },
  downloadIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightPurple,
  },
  botInfoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starContent: {
    flexDirection: 'row',
  },
  previewContainer: {
    flex: 2,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
  },
  previewItem: {
    width: 350,
    height: 200,
    borderRadius: 10,
  },
  listPreview: {
    flexGrow: 0,
    marginRight: -15,
  },
});
