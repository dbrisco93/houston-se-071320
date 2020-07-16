require 'pry'
require_relative './user'
require_relative './tweet'
require_relative './like'

naruto = User.new("Naruto")
sasuke = User.new("Sasuke")
sakura = User.new("Sakura")

t1 = naruto.post_tweet("This class is 🔥")

t2 = sasuke.post_tweet("First tweet ever!!")
t3 = sasuke.post_tweet("Objects...Classes...Methods...Self...What the heck?")

t4 = sakura.post_tweet("This is has_many - belongs_to!!")

naruto.like_tweet(t3)
sakura.like_tweet(t3)

# t3.likers => [ naruto, sakura ]
binding.pry



# puts "-----------------------------------------------------------------------"
# puts "| Tweets: |"
# puts "-----------------------------------------------------------------------"
#
# naruto.show_timeline
# sasuke.show_timeline
# sakura.show_timeline
#
# puts "-----------------------------------------------------------------------"
