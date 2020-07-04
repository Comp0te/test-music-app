import { StyleProp, ViewStyle } from 'react-native';

interface IAudioPlayerProps {
  onNext: () => void;
  onPrevious: () => void;
  onTogglePlayback: () => void;
  style?: StyleProp<ViewStyle>;
}

type PlayerStateType =
  | 'STATE_NONE'
  | 'STATE_PLAYING'
  | 'STATE_PAUSED'
  | 'STATE_STOPPED'
  | 'STATE_BUFFERING'
  | 'STATE_READY';

type UsePlaybackStateType = () => PlayerStateType;

type UseTrackPlayerEvents = (
  events: string[],
  handler: (payload: unknown) => void,
) => void;
