import { StyleSheet } from 'react-native';

import { shadowStyle, titleStyle } from '../../../../theme/styles';

export const styles = StyleSheet.create({
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 6,
    paddingVertical: 16,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    ...shadowStyle,
  },
  sliderWrapper: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  slider: {
    width: '100%',
    height: 60,
  },
  errorText: {
    textAlign: 'center',
    fontSize: 14,
  },
  controls: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    ...titleStyle,
  },
});
