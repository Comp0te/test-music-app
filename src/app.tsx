import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
// @ts-ignore
import { usePlaybackState } from 'react-native-track-player';

import { AudioPlayer, UsePlaybackStateType } from './components';
import { styles } from './style';
import {
  getStateName,
  setup,
  skipToNext,
  skipToPrevious,
  togglePlayback,
} from './api/track-player';

export const App: React.FC = () => {
  const playbackState = (usePlaybackState as UsePlaybackStateType)();

  useEffect(() => {
    setup();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <AudioPlayer
          onNext={skipToNext}
          style={styles.player}
          onPrevious={skipToPrevious}
          onTogglePlayback={togglePlayback}
        />
        <Text style={styles.state}>{getStateName(playbackState)}</Text>
      </View>
    </SafeAreaView>
  );
};
