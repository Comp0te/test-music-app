import { AppRegistry } from 'react-native';
import * as TrackPlayer from 'react-native-track-player';

import { name as appName } from './app.json';
import { App } from './src/app';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require('./service.js'));
