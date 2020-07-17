class Startup

  attr_accessor :name
  attr_reader :founder, :domain

  @@all = []

  def initialize(name,founder,domain)
    @name = name
    @founder = founder
    @domain = domain

    @@all << self
  end


  def sign_contract(vc,type,investment)
    FundingRound.new(self,vc,type,investment)
  end

  def num_funding_rounds
    rounds = FundingRound.all.select do |fr|
      fr.startup == self
    end
    rounds.length
  end

  def total_funds
    #
    #
    #
  end


  def investors
    invs = FundingRound.all.map do |fr|
      if fr.startup == self
        fr.vc
      end
    end
    invs.compact.uniq
  end



  def pivot(domain,name)
    @name = name
    @domain = domain
  end

  def self.all
    @@all
  end

  def self.find_by_founder(name)
    self.all.find { |startup| startup.founder == name }
    # self.all.find do |startup|
    #   startup.founder == name
    # end
  end

  def self.domains
    self.all.map { |startup| startup.domain }
  end

  private
  def domain=(domain)
    @domain = domain
  end

end
