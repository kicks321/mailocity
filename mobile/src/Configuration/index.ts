import { Config } from "react-native-config";
import { Configuration } from "../Types";

export default {
  env: Config.ENV,
  api: {
    url: Config.API_URL,
  },
} as Configuration;
