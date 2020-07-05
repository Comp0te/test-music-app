import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { useProgressBar } from './use-progress-bar';

export const ProgressBar: React.FC = () => {
  const { handlePressToEnd, timer, position, duration } = useProgressBar();

  return (
    <>
      <View style={styles.progress}>
        <View style={[styles.filledBar, { flex: position }]} />
        <View style={[styles.blankBar, { flex: duration - position }]} />
      </View>
      <View style={styles.timerContainer}>
        <Text>{timer}</Text>
        {Boolean(duration) && (
          <Button title={'To test switch tracks'} onPress={handlePressToEnd} />
        )}
      </View>
    </>
  );
};
