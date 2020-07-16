class User

  attr_reader :username

  def initialize(username)
    @username = username
    @tweet
  end

  def like_tweet(tweet)
    Like.new(tweet,self)
  end

  def liked_tweets
    Like.all.select { |like| like.user == self}
  end

  def post_tweet(message)
    tweet = Tweet.new(self,message)
    tweet
  end

  def tweets
    Tweet.all.select { |tweet| tweet.user == self}
  end

  def show_timeline
    self.tweets.each do |tweet|
      puts "-----------------------------------------------------------------------"
      puts " "
      puts "#{self.username}: #{tweet.message}"
      puts " "
      puts "-----------------------------------------------------------------------"
    end
  end

end
