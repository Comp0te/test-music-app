type UseTrackPlayerProgressType = (
  interval?: number,
) => {
  position: number;
  bufferedPosition: number;
  duration: number;
};
