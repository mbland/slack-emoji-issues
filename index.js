'use strict';

var Config = require('./lib/config');
var SlackRtmDataStore = require('./lib/slack-rtm-data-store');
var SlackClient = require('./lib/slack-client');
var GitHubClient = require('./lib/github-client');
var MessageLock = require('./lib/message-lock');
var Logger = require('./lib/logger');
var ReactionIssueFiler = require('./lib/reaction-issue-filer');

module.exports = exports = {
  logger: function(underlyingLogger) {
    return new Logger(underlyingLogger);
  },

  slackRtmDataStore: function(slackClient) {
    return new SlackRtmDataStore(slackClient.rtm);
  },

  singleInstanceReactionIssueFiler: function(configParams, slackDataStore,
      logger) {
    return exports.reactionIssueFiler(
      configParams, slackDataStore, new MessageLock, logger);
  },

  reactionIssueFiler: function(configParams, slackDataStore, messageLock,
      logger) {
    var filerConfig;

    if (!configParams.path && !configParams.data) {
      throw new Error('configParams must contain either "path" or "data"');
    } else if (configParams.path && configParams.data) {
      throw new Error('configParams contains both "path" and "data"');
    }

    if (configParams.path) {
      filerConfig = Config.fromFile(configParams.path, logger,
        configParams.updates);
    } else {
      filerConfig = new Config(configParams.data, configParams.updates);
    }

    return new ReactionIssueFiler(
      filerConfig,
      new SlackClient(slackDataStore, filerConfig),
      new GitHubClient(filerConfig),
      messageLock,
      logger);
  },

  loadHubotScript: function(robot) {
    var logger = new Logger(robot.logger),
        path = require('path');

    logger.info(null, 'loading');
    robot.loadFile(path.resolve(__dirname, 'hubot'), 'slack-github-issues.js');
  }
};
