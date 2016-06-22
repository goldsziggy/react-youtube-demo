if(+process.versions.node.split('.')[0] < 6){
  throw 'NODE VERSION MUST BE GREATER THAN OR EQUAL TO 6. CURRENT VERSION: ' + process.versions.node;
}
const express = require('express');
const app = express();
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  historyApiFallback: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  },
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));

app.use(express.static(path.resolve('build')));
app.set('port', process.env.PORT || 8080); //Set port

app.use('*', (req, res, next)  => {
  const filename = path.join(compiler.outputPath,'index.html');
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

//RUN EXPRESS SERVER
app.listen(app.get('port'), () => {
  console.log('** SERVER RUNNING 😊');
  console.log(`** PORT:  ${app.get('port')}`);
  console.log(`** ENV:   ${process.env.NODE_ENV}`);
});