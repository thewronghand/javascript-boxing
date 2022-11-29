const RacingGameController = require('./controller/RacingGameController');

class App {
  play() {
    new RacingGameController();
  }
}

module.exports = App;
const app = new App();
app.play();
