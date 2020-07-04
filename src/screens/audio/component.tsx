import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { AudioPlayer } from './components';
import { styles } from './style';
import { useBackgroundPlayer } from './hooks';

export const AudioScreen: React.FC = () => {
  const { onNext, onPrevious, onTogglePlayback } = useBackgroundPlayer();

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
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
