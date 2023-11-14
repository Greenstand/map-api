const express = require('express');

const router = express.Router();
const { configGetHandler, configPostHandler } = require('../handlers/config');
const { handlerWrapper } = require('../utils/utils');

router
  .route('/config')
  .get(handlerWrapper(configGetHandler))
  .post(handlerWrapper(configPostHandler));

module.exports = router;
