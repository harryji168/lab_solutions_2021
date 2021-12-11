i = 0
puts "How many sides does a hexagon have?"
puts ""
puts "1- five"
puts "2- six"
puts "3- seven"
puts ""
print "Enter the correct number:"

i += 1 if gets.to_i == 2 

puts "How many sides does a square have?"
puts ""
puts "1- four"
puts "2- five"
puts "3- six"
puts ""
print "Enter the correct number:"

i += 1 if gets.to_i == 1

puts "What's your age?"
puts ""
puts "1- 0"
puts "2- 50"
puts "3- 100"
puts ""
print "Enter the correct number:"

i += 1 if gets.to_i == 3

b = i.to_f / 3.00

puts "You scored #{(b * 100).to_i}%, you got #{i} out of 3 questions correctly.]]>"