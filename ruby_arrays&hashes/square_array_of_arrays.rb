arr = [[2,3,4], [5,6,7], [6,7,8]]

result = []

arr.each do |arr|
    temp = []
    arr.each do |num|
        temp << num * num 
    end
    result << temp 
end

p result