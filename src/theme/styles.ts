import { Platform } from 'react-native';

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
