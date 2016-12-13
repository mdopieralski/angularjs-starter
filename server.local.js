import webpack from 'webpack';
import config from './webpack.config';
import WebpackDevServer from 'webpack-dev-server';

const SERVER = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: 'src/',
    hot: true,
    historyApiFallback: true,
    quiet: true,
    rewrite(req) {

      req.url = req.url.replace(/^\/api/, '');
    }
  })
  .listen(config.port, 'localhost', (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(config.output.publicPath)
    console.log('Listening at localhost:' + config.port);
  });
