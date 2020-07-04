import TrackPlayer from 'react-native-track-player';

import { forestTrack, licenseTrack } from '../playlist';

export type PlayerStateType =
  | 'STATE_NONE'
  | 'STATE_PLAYING'
  | 'STATE_PAUSED'
  | 'STATE_STOPPED'
  | 'STATE_BUFFERING'
  | 'STATE_READY';

export async function setup() {
  await TrackPlayer.setupPlayer({});
  await TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      TrackPlayer.CAPABILITY_STOP,
    ],
    compactCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
    ],
  });
}

export async function togglePlayback(playbackState: PlayerStateType) {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack == null) {
    await TrackPlayer.reset();
    await TrackPlayer.add(forestTrack);
    await TrackPlayer.add(licenseTrack);
    await TrackPlayer.play();
  } else {
    if (playbackState === TrackPlayer.STATE_PAUSED) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
}

export function getStateName(state: PlayerStateType) {
  switch (state) {
    case TrackPlayer.STATE_NONE:
      return 'None';
    case TrackPlayer.STATE_PLAYING:
      return 'Playing';
    case TrackPlayer.STATE_PAUSED:
      return 'Paused';
    case TrackPlayer.STATE_STOPPED:
      return 'Stopped';
    case TrackPlayer.STATE_BUFFERING:
      return 'Buffering';
  }
}

export async function skipToNext() {
  try {
    await TrackPlayer.skipToNext();
  } catch (_) {}
}

export async function skipToPrevious() {
  try {
    await TrackPlayer.skipToPrevious();
  } catch (_) {}
}
