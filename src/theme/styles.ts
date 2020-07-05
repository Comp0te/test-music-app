import { Platform, TextStyle } from 'react-native';

export const shadowStyle = Platform.select({
  ios: {
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
  },
  android: {
    elevation: 1,
  },
});

export const titleStyle: TextStyle = {
  fontSize: 20,
  lineHeight: 24,
  color: 'rgba(1,6,34,0.91)',
  textAlign: 'center',
};
