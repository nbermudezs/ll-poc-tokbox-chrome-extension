var $ = require('jquery');

function ApiGateway() {
  this.getSessionDataUrl = '/api/v1/';
}

ApiGateway.prototype.getSessionData = function (cb) {
  return cb(null, {
    apiKey: '45321402',
    sessionId: '1_MX40NTMyMTQwMn5-MTQ0NTQ5MTk1NjUyMX5xZjB6MitEOVZBTjJDRE04RDQ0Q0hRdk5-UH4',
    token: 'T1==cGFydG5lcl9pZD00NTMyMTQwMiZzaWc9NGVkYzk4NzE0ZDUxNGM0OTlhMjYwODQ2ZGEyNGUzYjdmNjJhNjMxODpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTFfTVg0ME5UTXlNVFF3TW41LU1UUTBOVFE1TVRrMU5qVXlNWDV4WmpCNk1pdEVPVlpCVGpKRFJFMDRSRFEwUTBoUmRrNS1VSDQmY3JlYXRlX3RpbWU9MTQ0NTQ5MzkwNCZub25jZT0wLjg2NzM3OTIwMzExODQ0OSZleHBpcmVfdGltZT0xNDQ2MDk4Njg0JmNvbm5lY3Rpb25fZGF0YT0='
  });
  $.get(this.getSessionDataUrl, function(response) {
    if (response) {
      cb(null, response);
    } else {
      cb('Error: session data unavailable');
    }
  });
};

module.exports = ApiGateway;
