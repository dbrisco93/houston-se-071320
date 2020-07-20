class Follower

  attr_reader :name,:age,:life_motto
  @@all = []

  def initialize(name,age,life_motto)
    @name = name
    @age = age
    @life_motto = life_motto

    @@all << self
  end

  def cults
    groups = BloodOath.all.select do |oath|
      oath.follower == self
    end

    groups.map do |g|
      g.cult
    end
  end

  def join_cult(cult)
    BloodOath.new('today',cult,self)
  end

  def self.all
    @@all
  end

  def self.of_a_certain_age(age)
    self.all.select do |follower|
      follower.age >= age
    end
  end

end
