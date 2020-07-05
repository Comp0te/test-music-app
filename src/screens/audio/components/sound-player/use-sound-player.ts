import { useCallback, useEffect, useState } from 'react';

import { soundService } from '../../../../api/sound';

export const useSoundPlayer = ({
  file,
  autoPlay = false,
}: IUseSoundHookParams) => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [playing, setPlaying] = useState<boolean>(autoPlay);

  const setCurrentTimeCallback = useCallback((value: number, _) => {
    setCurrentTime(Math.floor(value * 10) / 10);
  }, []);

  const setDurationCallback = useCallback((value: number) => {
    setDuration(value);
  }, []);

  const setErrorCallback = useCallback((value: string) => {
    setError(value);
  }, []);

  useEffect(() => {
    soundService.prepareToPlay({
      file,
      setCurrentTimeCallback,
      setDurationCallback,
      setErrorCallback,
      autoPlay,
    });

    return () => {
      soundService.release();
      setCurrentTime(0);
      setDuration(0);
      setError('');
    };
  }, [
    autoPlay,
    file,
    setCurrentTimeCallback,
    setDurationCallback,
    setErrorCallback,
  ]);

  const onSliderComplete = useCallback((value: number) => {
    soundService.setCurrentTime(value);
    setCurrentTime(value);
  }, []);

  const handlePressTogglePlay = useCallback(() => {
    if (playing) {
      soundService.pause();
      setPlaying(false);
    } else {
      soundService.play(setCurrentTimeCallback);
      setPlaying(true);
    }
  }, [playing, setCurrentTimeCallback]);

  return {
    onSliderComplete,
    duration,
    currentTime,
    error,
    handlePressTogglePlay,
    togglePlayButtonLabel: playing ? 'Pause' : 'Play',
  };
};
