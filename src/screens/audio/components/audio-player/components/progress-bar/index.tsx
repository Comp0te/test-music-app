import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { useProgressBar } from './use-progress-bar';

export const ProgressBar: React.FC = () => {
  const { timer, position, duration } = useProgressBar();

  return (
    <>
      <View style={styles.progress}>
        <View style={[styles.filledBar, { flex: position }]} />
        <View style={[styles.blankBar, { flex: duration - position }]} />
      </View>
      <Text>{timer}</Text>
    </>
  );
};
