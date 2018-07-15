const path = require('path')

module.exports = {
  components: 'src/calendar.js',
  // styleguideComponents: {
  //   Wrapper: path.join(__dirname, '.styleguidist/ThemeWrapper')
  // },
  require: [
    path.join(__dirname, '.styleguidist/styles.css')
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    }
  }
}
