module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', '.svg'],
        alias: {
          '@src/app': './src/app',
          '@src/core': './src/core',
          '@src/library': './src/library',
          '@src/screens': './src/screens',
          "@screens": ["./src/screens"],
        },
      },
    ],
  ],
}
