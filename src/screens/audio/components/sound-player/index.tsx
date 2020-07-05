import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

import { styles } from './styles';
import { useSoundPlayer } from './use-sound-player';
import { ISoundPlayerProps } from './types';
import { ControlButton } from '../control-button';

export * from './types';

export const SoundPlayer: React.FC<ISoundPlayerProps> = ({ track }) => {
  const {
    duration,
    currentTime,
    loading,
    error,
    onSliderComplete,
    handlePressTogglePlay,
    togglePlayButtonLabel,
  } = useSoundPlayer({
    file: track.url,
  });

  if (error) {
    return <Text>{error}</Text>;
  }

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.sliderWrapper}>
        <Text>{track.title}</Text>
        <Slider
          value={currentTime}
          minimumValue={0}
          maximumValue={duration}
          step={0.1}
          style={styles.slider}
          thumbTintColor="#FF7D00"
          minimumTrackTintColor="#FF7D00"
          maximumTrackTintColor="#CCCCCC"
          onSlidingComplete={onSliderComplete}
        />
      </View>
      <View style={styles.controls}>
        <ControlButton
          title={togglePlayButtonLabel}
          onPress={handlePressTogglePlay}
        />
        <Text>{currentTime}</Text>
      </View>
    </View>
  );
};
