greeting = "hello"
result = ""

num = -1
while num >= -greeting.length
    result += greeting[num]
    num -= 1
end

greeting.split("").reverse_each do |x| 
    result += x
end
puts result