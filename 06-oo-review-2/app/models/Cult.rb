class Cult

  attr_reader :name, :location, :founding_year, :slogan
  @@all = []

  def initialize(name,location,founding_year,slogan)
    @name = name
    @location = location
    @founding_year = founding_year
    @slogan = slogan

    @@all << self
  end

  def recruit_follower(follower)
    BloodOath.new('today',self,follower)
  end

  def cult_population
    memberships = BloodOath.all.select do |oath|
      oath.cult == self
    end
    memberships.length
  end

  def average_age
    oaths = BloodOath.all.select do |oath|
      oath.cult == self
    end

    ages = oaths.map { |oath| oath.follower.age }
    average = ages.sum / ages.size.to_f
  end

  def my_followers_mottos
    oaths = BloodOath.all.select do |oath|
      oath.cult == self
    end

    ages = oaths.map { |oath| oath.follower.life_motto }
  end

  def self.all
    @@all
  end

  def self.find_by_name(name)
    bOath = BloodOath.all.find do |oath|
      oath.cult.name == name
    end
    bOath.cult
  end

  def self.find_by_location(location)
    self.all.select do |cult|
      cult.location == location
    end
  end

  def self.find_by_founding_year(founding_year)
    self.all.select do |cult|
      cult.founding_year == founding_year
    end
  end

end
