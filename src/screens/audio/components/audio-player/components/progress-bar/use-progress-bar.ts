// @ts-ignore
import { useTrackPlayerProgress } from 'react-native-track-player';
import { useCallback } from 'react';
import { seekTo } from '../../../../../../api/track-player';

export const useProgressBar = () => {
  const {
    duration,
    position,
  } = (useTrackPlayerProgress as UseTrackPlayerProgressType)();
  const timer = `${position.toFixed(0)}/${duration.toFixed(0)}`;
  const handlePressToEnd = useCallback(() => {
    seekTo(duration - 5);
  }, [duration]);

  return {
    duration,
    position,
    timer,
    handlePressToEnd,
  };
};
