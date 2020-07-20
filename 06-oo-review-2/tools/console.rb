require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console


puts "Mwahahaha!" # just in case pry is buggy and exits
user1 = Follower.new('Gara of the sand',12,'This is stupid..')
user2 = Follower.new('Gara of the sand',14,'This is stupid..')
user3 = Follower.new('Gara of the sand',18,'This is stupid..')

sandVillage = Cult.new('Sand','Dessert',2012,'Dont vaccum')
kpop = Cult.new('Kpop','Twitter',2020,'🤡')
group = Cult.new('Group','Twitter',2010,'njaklnfksjao')

sandVillage.recruit_follower(user1)
sandVillage.recruit_follower(user2)
sandVillage.recruit_follower(user3)
group.recruit_follower(user1)

# puts sandVillage.cult_population

# Cult.find_by_name('Sand')
# sandVillage.my_followers_mottos
