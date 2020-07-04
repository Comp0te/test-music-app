import React from 'react';
// @ts-ignore
import { useTrackPlayerProgress } from 'react-native-track-player';
import { View } from 'react-native';

import { styles } from './styles';

export const ProgressBar: React.FC = () => {
  const progress = (useTrackPlayerProgress as UseTrackPlayerProgressType)();

  return (
    <View style={styles.progress}>
      <View style={[styles.filledBar, { flex: progress.position }]} />
      <View
        style={[
          styles.blankBar,
          { flex: progress.duration - progress.position },
        ]}
      />
    </View>
  );
};
