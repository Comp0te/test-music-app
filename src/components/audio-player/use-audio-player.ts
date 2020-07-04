import TrackPlayer, {
  // @ts-ignore
  usePlaybackState,
  // @ts-ignore
  useTrackPlayerEvents,
} from 'react-native-track-player';
import { useCallback, useState } from 'react';
import {
  IUseAudioPlayersParams,
  UsePlaybackStateType,
  UseTrackPlayerEvents,
} from './types';
import { ImageRequireSource } from 'react-native';

export const useAudioPlayer = ({
  onTogglePlayback,
}: IUseAudioPlayersParams) => {
  const playbackState = (usePlaybackState as UsePlaybackStateType)();
  const [trackTitle, setTrackTitle] = useState<string>('');
  const [trackArtwork, setTrackArtwork] = useState<ImageRequireSource>();
  const [trackArtist, setTrackArtist] = useState<string>('');

  (useTrackPlayerEvents as UseTrackPlayerEvents)(
    ['playback-track-changed'],
    async (event) => {
      // @ts-ignore
      if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
        // @ts-ignore
        const track = await TrackPlayer.getTrack(event.nextTrack);
        const { title, artist, artwork } = track || {};
        setTrackTitle(title);
        setTrackArtist(artist);
        setTrackArtwork(artwork);
      }
    },
  );

  const isPlaying =
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING;

  const handlePressToggle = useCallback(() => {
    onTogglePlayback(playbackState);
  }, [onTogglePlayback, playbackState]);

  return {
    trackTitle,
    trackArtwork,
    trackArtist,
    handlePressToggle,
    middleButtonText: isPlaying ? 'Pause' : 'Play',
  };
};
