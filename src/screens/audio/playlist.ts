import { Track } from 'react-native-track-player';

export const playlist: Track[] = [
  {
    id: 'Forest',
    url: require('../../../assets/forest_cycled.mp3'),
    title: 'Forest',
    artist: 'bear',
    album: 'Best album',
    genre: 'Meditation',
    date: '2014-05-20T07:00:00+00:00',
    artwork: require('../../../assets/medium_forest.jpg'),
    duration: 126,
  },
  {
    id: 'License',
    url: require('../../../assets/license_superLong.mp3'),
    title: 'License',
    artist: 'artist',
    album: 'album',
    genre: 'Meditation',
    date: '2014-05-20T07:00:00+00:00',
    artwork: require('../../../assets/license.jpg'),
    duration: 423,
  },
];

export const instructionTrack: Track = {
  id: 'MeinHerzBrent',
  url: require('../../../assets/rammstein-mein-herz-brennt.mp3'),
  title: 'Rammstein Mein herz brennt',
  artist: 'Rammstein',
  album: 'MEIN HERZ BRENNT',
  genre: 'Electronic, Rock',
  date: '2014-05-20T07:00:00+00:00',
  artwork: require('../../../assets/license.jpg'),
  duration: 50,
};
