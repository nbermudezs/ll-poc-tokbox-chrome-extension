var App = React.createClass({
  componentDidMount: function() {
  },

  connect: function() {
    console.log('YOLO!');
  },

  render: function() {
    return (
      /* jshint ignore:start */
      <div>
        <h1>LL TokBox Chrome App - PoC</h1>
        <input type='button' value='Start' onClick={this.connect}></input>
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = App;
