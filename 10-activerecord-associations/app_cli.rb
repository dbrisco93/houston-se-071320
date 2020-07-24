require_relative './config/environment'

class AppCLI

  def welcome_message
    puts " "
    puts "Welcome to Tweeter!"
    puts " "
    puts "+++++++++++++++++++++++++"
    puts "List of all the Tweets:"
    puts "+++++++++++++++++++++++++"
    puts " "
  end

  def list_tweets
    Tweet.all.each do |tweet|
      puts "#{tweet.user.username} says: #{tweet.message}"
    end
  end

  def create_new_tweeets
  end

  def signup
    puts "Create an account here!!!"
    puts "Username:"
    username = gets.chomp
    puts "Bio:"
    bio = gets.chomp

    user = User.create(username: username, bio: bio)
  end

  def run
    welcome_message

    list_tweets

    user = signup

    user.post_tweet('Hello World!!!!')

    list_tweets
  end

end

AppCLI.new.run
