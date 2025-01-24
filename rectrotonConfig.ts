/**
 * Imports the necessary modules for using Reactotron in a React Native application.
 * @module Reactotron
 * @module reactotronRedux
 */
import Reactotron, { networking } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

/**
 * Configures Reactotron with the specified name and host.
 * @param {Object} config - The configuration object for Reactotron.
 * @param {string} config.name - The name of the Reactotron instance.
 * @param {string} config.host - The host address of the Reactotron server.
 * @returns The configured Reactotron instance.
 */
const reactotron = Reactotron.configure({
    name: 'RAB Mobile App',
    host: '192.168.58.251' 
    
})

    .useReactNative({
        asyncStorage: false, // there are more options to the async storage.
        networking: {
            // optionally, you can turn it off with false.
            ignoreUrls: /symbolicate/,
        },
        editor: false, // there are more options to editor
        overlay: false // just turning off overlay
    })
    .use(reactotronRedux())
    .use(networking())
    .connect();

export default reactotron;