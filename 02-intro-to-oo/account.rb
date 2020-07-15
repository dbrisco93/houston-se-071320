require 'pry'

class BankAccount

  attr_accessor :balance, :type
  attr_reader :name

  @@all = []

  def initialize(name,balance,type)
      @name = name
      @balance = balance
      @type = type

      @@all << self
  end

  def self.all
    @@all
  end

  def deposit(amount)
    self.balance += amount
    puts "Success!! Your balance is now: #{self.balance}"
  end

end
