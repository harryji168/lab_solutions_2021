# Your first name is Tam.
# Your last name is K.
# Your city of birth is Burnaby.
# Your age is 25.

result = {}

puts "Please enter your first name"
result["first name"] = gets.chomp

puts "Please enter your last name"
result["last name"] = gets.chomp

puts "Please enter your city of birth"
result["city of birth"] = gets.chomp

puts "Please enter your age"
result["age"] = gets.chomp

result.each do |key, value|
    p "Your #{key} is #{value}"
end


