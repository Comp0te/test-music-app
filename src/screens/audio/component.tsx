import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { AudioPlayer, SoundPlayer } from './components';
import { styles } from './style';
import { useBackgroundPlayer } from './hooks';
import { instructionTrack } from './playlist';

export const AudioScreen: React.FC = () => {
  const { onNext, onPrevious, onTogglePlayback } = useBackgroundPlayer();

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <SoundPlayer track={instructionTrack} />
        <AudioPlayer
          onNext={onNext}
          style={styles.player}
          onPrevious={onPrevious}
          onTogglePlayback={onTogglePlayback}
        />
      </View>
    </SafeAreaView>
  );
};
