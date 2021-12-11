require 'prime'
print "Enter the correct number:"

=begin 
# solution 1
x = gets.to_i
i = 1
while i <= x
    i += 1
    puts i if i.prime?
end
=end

=begin 
# solution 2
puts (1..gets.to_i).select{|x| x.prime?}
=end