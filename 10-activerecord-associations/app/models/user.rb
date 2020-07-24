class User < ActiveRecord::Base
  has_many :tweets
  has_many :likes


  has_many :liked_tweets, through: :likes

  def post_tweet(message)
    tweet = Tweet.create(message: message, user_id: self.id)
  end

end
