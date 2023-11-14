const Session = require('../infra/database/Session');
const Config = require('../models/Config');

class ConfigService {
  constructor() {
    this._session = new Session();
    this._config = new Config(this._session);
  }

  async getConfigs(filter, limitOptions) {
    return this._config.getConfigs(filter, limitOptions);
  }

  async createConfigs(config) {
    return this._config.createConfigs(config);
  }
}

module.exports = ConfigService;
