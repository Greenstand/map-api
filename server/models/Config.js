const ConfigRepository = require('../repositories/ConfigRepository');

class Config {
  constructor(session) {
    this._configRepository = new ConfigRepository(session);
  }

  static Config({ id, name, data, ref_id, ref_uuid, created_at, updated_at }) {
    return Object.freeze({
      id,
      name,
      data,
      ref_id,
      ref_uuid,
      created_at,
      updated_at,
    });
  }

  async getConfigs(filter = {}, limitOptions) {
    const configs = await this._configRepository.getByFilter(
      filter,
      limitOptions,
    );
    return configs.map((c) => this.constructor.Config(c));
  }

  async createConfigs(config) {
    return this._configRepository.create(config);
  }
}

module.exports = Config;
