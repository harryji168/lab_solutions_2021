puts "input something: "
str = gets.chomp

puts (str.downcase.include? "c") ? "Yes it has C" : "There is no C"