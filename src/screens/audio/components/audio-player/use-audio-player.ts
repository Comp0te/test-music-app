import TrackPlayer, {
  // @ts-ignore
  usePlaybackState,
  // @ts-ignore
  useTrackPlayerEvents,
} from 'react-native-track-player';
import { useCallback, useState } from 'react';
import { ImageRequireSource } from 'react-native';

import { UsePlaybackStateType, UseTrackPlayerEvents } from './types';
import { seekTo } from '../../../../api/track-player';

export const useAudioPlayer = () => {
  const playbackState = (usePlaybackState as UsePlaybackStateType)();
  const [trackTitle, setTrackTitle] = useState<string>('');
  const [trackArtwork, setTrackArtwork] = useState<ImageRequireSource>();
  const [trackArtist, setTrackArtist] = useState<string>('');
  const [trackDuration, setTrackDuration] = useState<number>(0);

  (useTrackPlayerEvents as UseTrackPlayerEvents)(
    ['playback-track-changed'],
    async (event) => {
      // @ts-ignore
      if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
        // @ts-ignore
        const track = await TrackPlayer.getTrack(event.nextTrack);
        const { title, artist, artwork, duration } = track || {};
        setTrackTitle(title);
        setTrackArtist(artist);
        setTrackArtwork(artwork);
        setTrackDuration(duration ?? 0);
      }
    },
  );

  const isPlaying =
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING;

  const handlePressToEnd = useCallback(() => {
    seekTo(trackDuration - 5);
  }, [trackDuration]);

  return {
    trackTitle,
    trackArtwork,
    trackArtist,
    handlePressToEnd: trackDuration ? handlePressToEnd : null,
    middleButtonText: isPlaying ? 'Pause' : 'Play',
  };
};
