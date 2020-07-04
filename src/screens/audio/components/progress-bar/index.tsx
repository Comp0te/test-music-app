import React, { useCallback } from 'react';
// @ts-ignore
import { useTrackPlayerProgress } from 'react-native-track-player';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { seekTo } from '../../../../api/track-player';

export const ProgressBar: React.FC = () => {
  const {
    duration,
    position,
  } = (useTrackPlayerProgress as UseTrackPlayerProgressType)();
  const timer = `${position.toFixed(0)}/${duration.toFixed(0)}`;
  const handlePressToEnd = useCallback(() => {
    seekTo(duration - 5);
  }, [duration]);

  return (
    <>
      <View style={styles.progress}>
        <View style={[styles.filledBar, { flex: position }]} />
        <View style={[styles.blankBar, { flex: duration - position }]} />
      </View>
      <View style={styles.timerContainer}>
        <Text>{timer}</Text>
        <Button title={'To test switch tracks'} onPress={handlePressToEnd} />
      </View>
    </>
  );
};
