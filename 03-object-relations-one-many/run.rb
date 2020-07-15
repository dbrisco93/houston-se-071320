require 'pry'
require_relative './user'
require_relative './tweet'

naruto = User.new('Naruto')
sasuke = User.new('Sasuke')


naruto.post_tweet('Dattebayo!!')
naruto.post_tweet('Ya know...')

sasuke.post_tweet('Such a loser..')

binding.pry

# naruto.tweets.each do |tweet|
#   puts "Naruto says: #{tweet.message}"
# end
#
# sasuke.tweets.each do |tweet|
#   puts "Sasuke says: #{tweet.message}"
# end
