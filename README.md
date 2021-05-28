# News Aggregator App by Dave Gentilli

## Summary

This is a news aggregator app built with React Native using the New York Times' public API. Readers can browse with a guest account (no signup required) or sign up with email and password. The app includes a news feed, advanced search, and a popular stories feed. Readers can personalize their experience on the settings screen by selecting a light or dark theme and modifying their news category preferences.

The app uses React Native CLI and Firebase for signup/login/password reset.

## Reference Materials

### Getting started with React Native:

https://archive.reactnative.dev/docs/getting-started

### React Navigation

https://reactnavigation.org/docs/getting-started/

### React Native async storage (third party package)

https://github.com/react-native-async-storage/async-storage

### Firebase

Add Firebase to an app: https://firebase.google.com/docs/web/setup?authuser=0
Authentication: https://firebase.google.com/docs/auth?authuser=0

### API Documentation

NYT developers: https://developer.nytimes.com/apis
Article search API: https://developer.nytimes.com/docs/articlesearch-product/1/overview
Most Popular API: https://developer.nytimes.com/docs/most-popular-product/1/overview
Top Stories API: https://developer.nytimes.com/docs/top-stories-product/1/overview

### Axios

https://github.com/axios/axios

### Styled Components

https://styled-components.com/

## Prerequisites

Node
NPM
React Native CLI
New York Times developer account: https://developer.nytimes.com/get-started
Firebase account: https://firebase.google.com/docs/guides?authuser=0

## Instructions for cloning and running locally

Clone the app and install dependencies

```
git clone https://github.com/dgentilli/newsApp.git
cd newsApp
npm install
```

create a .env file

```
touch .env
echo NYT_API_KEY=<yourApiNYTKey>
echo FIREBASE_API_KEY=<yourFirebaseAPIKey>
echo FIREBASE_AUTH_DOMAIN=<yourFirebaseAuthDomain>
echo FIREBASE_PROJECT_ID=<yourFirebaseProjectID>
echo FIREBASE_STORAGE_BUCKET=<yourFirebaseStorageBucket>
echo FIREBASE_MESSAGING_SENDER_ID=<yourFIrebaseMessagingSenderId>
echo FIREBASE_APP_ID=<yourFirebaseAppId>
```

Running locally

```
npx react-native run-ios
npx react-native run-android
```

## Author

Dave Gentilli
