require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

microsoft = Startup.new('Microsoft','Gates','Tech')
apple = Startup.new('Apple','Steve','Tech')
nextstep = Startup.new('Nextstep','Steve','Tech')
mixer = Startup.new('Mixer','Somebody','Tech')

# mixer.pivot('🗑','Facebook Gaming')
# Startup.find_by_founder('Steve')

# Startup.domains

adam = VentureCapitalist.new('Adam',2000000)
eve = VentureCapitalist.new('Eve',1000002000000000)

# round1 = FundingRound.new(mixer,eve,'Angel',2500000)
# round2 = FundingRound.new(mixer,adam,'Angel',5000)
# round3 = FundingRound.new(nextstep,eve,'Seed',2000000)

mixer.sign_contract(eve,'Angel',2500000)
mixer.sign_contract(eve,'Angel',50000)
mixer.sign_contract(adam,'Angel',5000)
nextstep.sign_contract(eve,'Seed',2000000)


binding.pry

0 #leave this here to ensure binding.pry isn't the last line
