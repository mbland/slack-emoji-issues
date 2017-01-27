'use strict';

module.exports = SlackRtmDataStore;

// slackRtmClient should be of type RtmClient from @slack/client
function SlackRtmDataStore(slackRtmClient) {
  this.rtmClient = slackRtmClient;
}

SlackRtmDataStore.prototype.teamId = function() {
  return this.rtmClient.activeTeamId;
};

SlackRtmDataStore.prototype.channelById = function(channelId) {
  // Public channels are in the channels list, while private
  // channels are in the groups list.
  if(channelId[0] === 'C') {
    return Promise.resolve(this.rtmClient.dataStore.getChannelById(channelId));
  } else {
    return Promise.resolve(this.rtmClient.dataStore.getGroupById(channelId));
  }
};

SlackRtmDataStore.prototype.teamInfo = function() {
  return Promise.resolve(this.rtmClient.dataStore.teams[this.teamId()]);
};
