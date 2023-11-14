const BaseRepository = require('./BaseRepository');

class ConfigRepository extends BaseRepository {
  constructor(session) {
    super('config', session);
  }

  async create(object) {
    const result = await this._session
      .getDB()(this._tableName)
      .insert(object)
      .onConflict('ref_id')
      .merge('ref_uuid', 'name', 'data')
      .returning('*');

    return result[0];
  }
}

module.exports = ConfigRepository;
