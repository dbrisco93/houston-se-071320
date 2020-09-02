require 'pry'

class Person

  attr_accessor :name

  def initialize(name)
    @name = name
    
  end

  def self.say_something
    puts "self is: #{self}"
  end

  def print_name
    puts "self is: #{self}"
  end

end

binding.pry

andy = Person.new('andy')
puts andy.name
