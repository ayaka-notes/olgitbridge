/*
| Settings for olgitbridge for you to change.
*/
const config = module.exports = { forward: { }, ssl: { } };

// overleaf server
config.olServer = process.env.OL_GIT_BRIDGE_OVERLEAF_SERVER || 'http://localhost';

// used if all the working directories in one place
// must be absolute path ending with '/'
config.baseDir = '/var/olgitbridge/';

// blueprint of the overleaf version (only differences to git to be uploaded again)
config.bluesDir = config.baseDir + 'blues/';

// stores hashes of the downloaded zips to optimize cases
// when no changes happened in overleaf
config.hashDir = config.baseDir + 'hash/';

// place of the git clones
config.padsDir = config.baseDir + 'pads/';

// place of the git repositories
config.reposDir = config.baseDir + 'repos/';

// milliseconds to not downsync a project again
config.downSyncTimeout = 30000;

// ssl settings
config.ssl.enable = process.env.OL_GIT_BRIDGE_SSL_ENABLE || false;
config.ssl.key = process.env.OL_GIT_BRIDGE_SSL_KEY || 'XXX';
config.ssl.cert = process.env.OL_GIT_BRIDGE_SSL_CERT || 'XXX';

// change to 443 for https
config.port = parseInt(process.env.OL_GIT_BRIDGE_PORT) || 5000;

// enable to forward requests to the main port.
config.forward.enable = process.env.OL_GIT_BRIDGE_FORWARD_ENABLE === "true" || false;
// set this to the URL of the server
config.forward.target = 'https://HOST';
config.forward.port = 80;
