class TweetsApp

  def call
    puts 'Welcome to Twitter'

    puts 'Enter a username:'
    username = gets.chomp

    puts 'Enter a message:'
    message = gets.chomp




    tweet = Tweet.new({ 'username' => username, 'message' => message })

    # tweets = Tweet.all
    #
    # render(tweets)
    # Tweet.get_tweets
  end

  private

  def render(tweets)
    tweets.each do |tweet|
      puts "#{tweet.username} says: #{tweet.message}"
    end
  end
end

# info = {
#   :username => 'Hello',
#   :password => 'password',
#   :address => '',
#   :lkafnfokj => "ajfopsakjop"
# }
#
# auth = Auth.new
#
#
# class Auth
#
#   def initialize(information={})
#     @username = information[:username]
#     @password = information[:password]
#   end
#
# end
