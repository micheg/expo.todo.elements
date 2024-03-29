# expo.todo.elements

A Todo App written in React Native Elements using Expo

## Why

A simple "TODO" application, which however introduces many important concepts, persistent and asynchronous storage, scrolling lists, native alerts, nested components written with functional syntax and hooks.
An article will follow soon.

## Syntax

I surrendered to prettier.

## UI

I used "react native elements" because it's a fantastic library and has great expo support.

## Preview

![preview](https://michelangelo.altervista.org/videos/todo.app.gif "preview")

## Build

[see docs here.](https://docs.expo.dev/build/setup/)

- npx eas-cli@latest login
- npx eas-cli@latest build:configure
- npx eas-cli@latest build --platform android
- npx eas-cli@latest build -p android --profile preview (for getting apk)
- npx expo start --no-dev --minify (for best performance and no debug)

## Local build

Setting Android SDK, then:

    npx expo prebuild --platform android --clean
    cd android
    ./gradlew clean
    ./gradlew assembleRelease

Use bundleRelease for getting AAB.

See https://docs.expo.dev/build-reference/apk/
