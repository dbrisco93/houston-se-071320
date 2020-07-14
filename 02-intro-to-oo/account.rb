require 'pry'

class BankAccount

  def initialize(name,balance,type)
      @name = name
      @balance = balance
      @type = type
  end

  def balance
    @balance
  end

  def balance=(amount)
    @balance = amount
  end

end
