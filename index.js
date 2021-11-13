/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HelloWorld from './src/helloworld';
import CapturingTaps from './src/capturingtaps';
import CustomComponent from './src/customComponent';
import State from './src/stateAndprops';
import Styling from './src/styling';
import Scrollable from './src/scrollable';
import Form from './src/form';
import LongList from './src/longlist';

AppRegistry.registerComponent(appName, () => App);

