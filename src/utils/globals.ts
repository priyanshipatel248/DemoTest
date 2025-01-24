import {
  Dimensions,
  Platform,
  NativeModules,

} from "react-native";

/**
 * Gets the width and height of the device screen using the Dimensions API and exports them as constants.
 * @returns None
 */
const { width, height } = Dimensions.get("window");
export const screenWidth: number = width;
export const screenHeight: number = height;

/**
 * Checks if the current platform is iOS.
 * @returns {boolean} - true if the platform is iOS, false otherwise.
 */
export const isIOS = (): boolean => {
  return Platform.OS === "ios" ? true : false;
};

/**
 * This module exports constants related to the app's status bar and header.
 * @module StatusBarHeaderConstants
 */
const { StatusBarManager } = NativeModules;
export const statusHeight: number = StatusBarManager.HEIGHT;
const androidHeaderHeight: number = 56;
const iosHeaderHeight: number = statusHeight + 44;
export const headerHeight: number = isIOS()
  ? iosHeaderHeight
  : androidHeaderHeight;

export interface Globals {
  kUserToken: string;
  kRefreshToken: string;
}

export const Globals: Globals = {
  kUserToken: "",
  kRefreshToken: "",
};

// Places API Key
/**
 * Object containing the Google Place API key and language to be used for requests.
 * @property {string} key - The API key for the Google Place API.
 * @property {string} language - The language to be used for requests to the Google Place API.
 */
export interface GooglePlaceAPIKey {
  key: string;
  language: string;
}

export const GooglePlaceAPIKey: GooglePlaceAPIKey = {
  key: "",
  language: "en",
};
