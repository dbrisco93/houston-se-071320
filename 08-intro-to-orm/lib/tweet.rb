class Tweet

  attr_accessor :message, :username
  # @@all = []

  def initialize(attrs={})
    @id = attrs['id']
    @message = attrs['message']
    @username = attrs['username']

    self.save unless @id
    # @@all << self
  end

  def self.all
    tweets = DB[:conn].execute('SELECT * from tweets')
    tweets.map { |tweet| Tweet.new(tweet) }
  end

  def save
    # query = "INSERT into tweets (username,message) VALUES (#{@username},#{@message}) "

    query = <<-SQL
      insert into tweets (username,message)
      values ("#{@username}","#{@message}")
    SQL

    DB[:conn].execute(query)
    binding.pry

  end

  # def self.all
  #   @@all
  # end


end
