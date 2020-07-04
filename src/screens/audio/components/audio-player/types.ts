import { StyleProp, ViewStyle } from 'react-native';

import { PlayerStateType } from '../../../../api/track-player';

export interface IAudioPlayerProps {
  onNext: () => void;
  onPrevious: () => void;
  onTogglePlayback: () => void;
  style?: StyleProp<ViewStyle>;
}

export type UsePlaybackStateType = () => PlayerStateType;

export type UseTrackPlayerEvents = (
  events: string[],
  handler: (payload: unknown) => void,
) => void;
