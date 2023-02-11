module.exports = {
  plugins: ['jest', 'prettier'],
  extends: ['@react-native-community', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/react-in-jsx-scope': 'off'
      }
    }
  ]
}
