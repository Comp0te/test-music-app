import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import { IAudioPlayerProps } from './types';
import { ControlButton } from '../control-button';
import { ProgressBar } from '../progress-bar';
import { useAudioPlayer } from './use-audio-player';

export * from './types';

export const AudioPlayer: React.FC<IAudioPlayerProps> = ({
  onNext,
  onPrevious,
  onTogglePlayback,
  style,
}) => {
  const {
    trackArtist,
    trackArtwork,
    trackTitle,
    middleButtonText,
  } = useAudioPlayer();

  return (
    <View style={[styles.card, style]}>
      <View style={styles.cover}>
        {trackArtwork && <Image style={styles.image} source={trackArtwork} />}
      </View>
      <ProgressBar />
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      <View style={styles.controls}>
        <ControlButton title={'<<'} onPress={onPrevious} />
        <ControlButton title={middleButtonText} onPress={onTogglePlayback} />
        <ControlButton title={'>>'} onPress={onNext} />
      </View>
    </View>
  );
};
