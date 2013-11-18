# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

def rand_in_range(from, to)
  rand * (to - from) + from
end

def rand_time(from, to=Time.now)
  Time.at(rand_in_range(from.to_f, to.to_f))
end

race_types = ["running", "biking", "triathlon"]

50.times { Race.create(name: Faker::Name.name, description: Faker::Lorem.paragraph, race_type: race_types.sample ,race_date: rand_time(Time.now - 300.days))}
