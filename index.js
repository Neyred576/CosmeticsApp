/**
 * @format
 */

import { AppRegistry, View } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Workaround for React Native 0.78.0 codegen bug
if (!View.prototype.accessibilityContainerViewIsModal) {
    View.prototype.accessibilityContainerViewIsModal = false;
}

AppRegistry.registerComponent(appName, () => App);
