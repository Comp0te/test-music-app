import { StyleSheet } from 'react-native';

import { shadowStyle } from '../../../../theme/styles';

export const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    width: '80%',
    borderRadius: 4,
    backgroundColor: 'white',
    ...shadowStyle,
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: 'grey',
  },
  image: {
    width: 140,
    height: 140,
  },
  title: {
    marginTop: 10,
  },
  artist: {
    fontWeight: 'bold',
  },
  controls: {
    marginVertical: 20,
    flexDirection: 'row',
  },
});
