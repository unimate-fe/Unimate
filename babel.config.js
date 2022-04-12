module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@assets': './assets',
          '@src': './src',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
