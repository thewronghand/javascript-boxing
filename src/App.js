const BoxingGameController = require('./controller/BoxingGameController');

class App {
  play() {
    new BoxingGameController();
  }
}

module.exports = App;
const app = new App();
app.play();
