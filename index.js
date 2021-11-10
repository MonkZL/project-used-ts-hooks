/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TestApp from "./test/testApp/TestApp";

LogBox.ignoreAllLogs(true)

AppRegistry.registerComponent(appName, () => TestApp);
