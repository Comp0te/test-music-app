import TrackPlayer, { Track } from 'react-native-track-player';

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

export const subscribeToInfinitePlay = (track: Track) => {
  const subscription = TrackPlayer.addEventListener(
    'playback-track-changed',
    async () => {
      await TrackPlayer.add(track);
    },
  );

  return () => {
    subscription.remove();
  };
};

export async function toggleTrack(track: Track) {
  await TrackPlayer.reset();
  await TrackPlayer.add([track, track]);
  await TrackPlayer.play();
}

export async function togglePlayback(track: Track) {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  const playbackState = await TrackPlayer.getState();

  if (!currentTrack) {
    await TrackPlayer.add(track);
    await TrackPlayer.play();
  } else {
    if (playbackState === TrackPlayer.STATE_PAUSED) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
}
