import Sound from 'react-native-sound';

type GetCurrentTimeCallbackType = (seconds: number, isPlaying: boolean) => void;

interface IPrepareToPlayParams {
  file: typeof require;
  setDurationCallback: (value: number) => void;
  setCurrentTimeCallback: GetCurrentTimeCallbackType;
  setErrorCallback: (value: string) => void;
  autoPlay?: boolean;
  duration?: number;
}

class SoundService {
  private _sound: Sound | null = null;
  private _intervalId: number = 0;

  prepareToPlay({
    file,
    duration,
    setDurationCallback,
    setCurrentTimeCallback,
    setErrorCallback,
    autoPlay = false,
  }: IPrepareToPlayParams) {
    const soundCallback = (error: any) => {
      if (error) {
        setErrorCallback('inappropriate file');

        return;
      }

      if (duration) {
        setDurationCallback(duration);
      } else {
        setDurationCallback(this._sound?.getDuration() ?? 0);
      }

      if (autoPlay) {
        this.play(setCurrentTimeCallback);
      }

      this.setNumberOfLoops(-1);
    };

    this._sound = new Sound(file, soundCallback);
  }

  play(setCurrentTimeCallback: GetCurrentTimeCallbackType) {
    if (this._sound && this._sound.isLoaded()) {
      this._intervalId = setInterval(() => {
        soundService.getCurrentTime(setCurrentTimeCallback);
      }, 100);

      this._sound.play();
    }
  }

  pause() {
    if (this._sound && this._sound.isPlaying()) {
      this._sound.pause();
    }
  }

  setNumberOfLoops(value: number) {
    this._sound?.setNumberOfLoops(value);
  }

  getDuration() {
    return this._sound?.getDuration();
  }

  getCurrentTime(callback: GetCurrentTimeCallbackType) {
    this._sound?.getCurrentTime(callback);
  }

  setCurrentTime(seconds: number) {
    this._sound?.setCurrentTime(seconds);
  }

  release() {
    if (this._sound) {
      this._sound?.release();
      this._sound = null;
    }

    if (this._intervalId) {
      clearInterval(this._intervalId);
    }
  }
}

export const soundService = new SoundService();
