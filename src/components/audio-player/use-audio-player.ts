import TrackPlayer, {
  // @ts-ignore
  usePlaybackState,
  // @ts-ignore
  useTrackPlayerEvents,
} from 'react-native-track-player';
import { useState } from 'react';
import { UsePlaybackStateType, UseTrackPlayerEvents } from './types';

export const useAudioPlayer = () => {
  const playbackState = (usePlaybackState as UsePlaybackStateType)();
  const [trackTitle, setTrackTitle] = useState<string>('');
  const [trackArtwork, setTrackArtwork] = useState<string>();
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

  return {
    trackTitle,
    trackArtwork,
    trackArtist,
    middleButtonText: isPlaying ? 'Pause' : 'Play',
  };
};
