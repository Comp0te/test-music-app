import { useCallback, useEffect, useState } from 'react';
import { Track } from 'react-native-track-player';

import { playlist } from '../playlist';
import {
  setup,
  subscribeToInfinitePlay,
  togglePlayback,
  toggleTrack,
} from '../../../api/track-player';

export const useBackgroundPlayer = () => {
  const [bgTrack, setBgTrack] = useState<Track>(playlist[0]);

  const onTogglePlayback = useCallback(async () => {
    await togglePlayback(bgTrack);
  }, [bgTrack]);

  const onNext = useCallback(async () => {
    const trackIndex = playlist.findIndex((track) => track.id === bgTrack.id);

    const nextTrack =
      trackIndex + 1 < playlist.length ? playlist[trackIndex + 1] : playlist[0];

    setBgTrack(nextTrack);
    await toggleTrack(nextTrack);
  }, [bgTrack.id]);

  const onPrevious = useCallback(async () => {
    const trackIndex = playlist.findIndex((track) => track.id === bgTrack.id);

    const nextTrack =
      trackIndex - 1 >= 0
        ? playlist[trackIndex - 1]
        : playlist[playlist.length - 1];

    setBgTrack(nextTrack);
    await toggleTrack(nextTrack);
  }, [bgTrack.id]);

  useEffect(() => {
    let unsubscribe: Function;

    setup().then(() => {
      unsubscribe = subscribeToInfinitePlay(bgTrack);
    });

    return () => {
      unsubscribe();
    };
  }, [bgTrack]);

  return {
    onTogglePlayback,
    onPrevious,
    onNext,
  };
};
