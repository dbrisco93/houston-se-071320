class User < ActiveRecord::Base

  has_many :tweets
  # def tweets
  #   Tweet.all.select do |tweet|
  #     tweet.user_id == self.id
  #   end
  # end

end
