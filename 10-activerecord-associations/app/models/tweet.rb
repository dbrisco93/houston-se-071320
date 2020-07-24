class Tweet < ActiveRecord::Base
  belongs_to :user
  has_many :likes

  has_many :users, through: :likes

  # def people_who_liked_me
  #
  #   likes = Like.all.select do |like|
  #     like.tweet_id == self.id
  #   end
  #
  #   likes.map { |like| User.find_by(id: like.user_id) }
  # end

end
