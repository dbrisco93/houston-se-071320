class Tweet

  attr_accessor :message, :user
  @@all = []

  def initialize(user, message)
    @user = user
    @message = message
    @@all << self
  end

  def username
    self.user.username
  end

  def likers
    users = []
    # self => tweet instance
    Like.all.each do |like|
      if like.tweet == self
        users << like.user
      end
    end
    users
  end

  def self.all
    @@all
  end

end
