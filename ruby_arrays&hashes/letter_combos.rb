# Given a string such as "abcd". Generate an array that gives every 2-letter combination
#  that are adjacent so your code will generate:
#  ["ab", "bc", "cd"]

# split this string into an arry
# loop this array, get each element and combine it with the next element
# put it into a result array
# print it

puts "enter a string here:"

str = gets.chomp # "abcd"

arr = str.split("") #=> ['a','b','c','d']

result = []

# index + 1 => next index of the element
# the last loop should be 'c' => 0...arr.length-1
for i in 0...(arr.length-1) # => 0, 1, 2
    result << arr[i] + arr[i+1]
end

p result



