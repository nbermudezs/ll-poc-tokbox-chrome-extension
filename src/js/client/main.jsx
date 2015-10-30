var ApiGateway = require('./api');

var App = React.createClass({
  getDefaultProps: function() {
    gateway = new ApiGateway();
    return {
      apiGateway: gateway
    };
  },

  getInitialState: function() {
    return {
      connected: false
    };
  },

  componentDidMount: function() {
  },

  start: function() {
    var _this = this;
    this.props.apiGateway.getSessionData(function(err, response) {
      if (response && !err) _this.connect(response);
    });
  },

  connect: function(sessionData) {
    this.session = OT.initSession(sessionData.apiKey, sessionData.sessionId);
    this.session.on('streamCreated', this.onStageStreamCreated);
    this.session.connect(sessionData.token, this.onSessionConnected);
  },

  onSessionConnected: function(err) {
    if (err) {
      console.log('something went wrong...');
    } else {
      console.log('YAY! connected!');
      this.startPublishing();
    }
  },

  onStageStreamCreated: function(event) {
    console.log(event);
  },

  startPublishing: function() {
    var _this = this;
    this.props.OT.initPublisher('myVideo', { video: true, width: 400, height:300, name:"Bob's stream"}, function(err) {
      console.log('here!');
      console.log(err);
      _this.forceUpdate();
    });
  },

  render: function() {
    return (
      /* jshint ignore:start */
      <div>
        <h1>LL TokBox Chrome App - PoC</h1>
        <input type='button' value='Start' onClick={this.start}></input>
        <div id="myVideo"></div>

      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = App;
