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
    genre: 'License',
    date: '2014-05-20T07:00:00+00:00',
    artwork: require('../../../assets/license.jpg'),
    duration: 423,
  },
];
