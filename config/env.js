// Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.

var REACT_APP = /^REACT_APP_/i;

function getClientEnvironment(publicUrl) {
  var processEnv = Object.keys(process.env)
    // this line strips out all process.env values that dont' begin with REACT_APP
    // not a big fan of this, so get rid of it unless it becomes necessary later
    //.filter(key => REACT_APP.test(key))
    .reduce((env, key) => {
      env[key] = JSON.stringify(process.env[key]);
      return env;
    }, {
      // Useful for determining whether we’re running in production mode.
      // Most importantly, it switches React into the correct mode.
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      // Useful for resolving the correct path to static assets in `public`.
      // For example, <img src={process.env.PUBLIC_URL + '/img/logo.png'} />.
      // This should only be used as an escape hatch. Normally you would put
      // images into the `src` and `import` them in code to get their paths.
      'PUBLIC_URL': JSON.stringify(publicUrl),
      // Apply some app defaults for when .env is not present
      'API_URL': JSON.stringify(process.env.API_URL || 'https://windview-beta.nrel.gov/data/api'),
      'TILE_SERVER_URL': JSON.stringify(process.env.TILE_SERVER_URL || 'https://windview-beta.nrel.gov/tiles')
    });
  return {'process.env': processEnv};
}

module.exports = getClientEnvironment;
