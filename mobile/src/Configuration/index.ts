import { Config } from 'react-native-config';
import { Configuration } from '../Types';
import Constants from 'expo-constants';
const { manifest } = Constants;

const baseUrl =
    typeof manifest?.packagerOpts === 'object' && manifest.packagerOpts.dev
        ? typeof manifest?.debuggerHost === 'string' && manifest?.debuggerHost !== undefined
            ? /**
               * @todo resolve debuggerHost being possibly undefined
               */
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore: Unreachable code error
              manifest.debuggerHost.split(':').shift().concat(':5000')
            : undefined
        : undefined;

export default {
    env: manifest?.extra?.env,
    api: {
        url: baseUrl,
    },
} as Configuration;
