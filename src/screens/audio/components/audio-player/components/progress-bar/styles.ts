import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  progress: {
    height: 1,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
  },
  filledBar: {
    backgroundColor: 'red',
  },
  blankBar: {
    backgroundColor: 'grey',
  },
  timerContainer: {
    alignItems: 'center',
  },
});
