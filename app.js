var http = require('http')
  , api = 'http://aerial-valor-93012.appspot.com';

var get = function (uri, cb) {
  http.get(uri, function (res) {
    res.on('data', function (chunk) {
      return cb(null, chunk);
    });
  }).on('error', function (err) {
    return cb(err, null);
  });
};

var sum = function (a, b) {
  return a + b;
};

get(api + '/challenge', function (err, ret) {
  if (err) return console.error(err);
  var json = JSON.parse(ret);
  get(api + '/challenge/' + json.token + '/' + json.values.reduce(sum, 0), function (err, retFinal) {
    if (err) return console.log(err);
    console.log('Whats a Mamon favourite food? ' + "\n" + JSON.parse(retFinal).answer);
  });
});