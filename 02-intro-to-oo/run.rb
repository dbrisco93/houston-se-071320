require 'pry'
require_relative './account'

account1 = BankAccount.new("Goku",0,"Checking")
account2 = BankAccount.new("Vegeta",100000000,"Savings")

binding.pry
