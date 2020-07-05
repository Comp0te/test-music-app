// @ts-ignore
import { useTrackPlayerProgress } from 'react-native-track-player';

export const useProgressBar = () => {
  const {
    duration,
    position,
  } = (useTrackPlayerProgress as UseTrackPlayerProgressType)();
  const timer = `${position.toFixed(0)}/${duration.toFixed(0)}`;

  return {
    duration,
    position,
    timer,
  };
};
