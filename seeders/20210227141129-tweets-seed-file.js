'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const genFakeTweet = () => {
      const tweets = []
      let tweetId = 1
      let johnnyId = 1
      let count = 0
      for (let i = 0; i < 5; i++) { //users
        for (let j = 0; j < 10; j++) { //10 tweets per user
          tweets.push({
            id: count === 0 ? 1 : tweetId += 10,
            UserId: 10 * (i + 1) + 1,
            description: `Johnny is a handsome guy. tweetId: ${count === 0 ? 1 : johnnyId += 10}`,
            createdAt: new Date(),
            updatedAt: new Date()
          })
          ++count
        } 
      }
      return tweets
    }
    const fakeTweets = genFakeTweet()
    await queryInterface.bulkInsert('Tweets', fakeTweets, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tweets', null, {})
  }
};
