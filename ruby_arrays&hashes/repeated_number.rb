# You are given an array with numbers between 1 and 1,000,000. 
# One integer is in the array twice. How can you determine which one?
# Can you think of a way to do it using little extra memory?
# Solve it in two ways: one using hashes and one without.

arr = (1..10).to_a.push(rand(10))
p arr

for element in arr do
    # index => 9   rindex => 99999
    if arr.index(element) != arr.rindex(element)
        puts element
        break
    end
end


# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3]
# {
#     "1":1,
#     "2":2,
#     "3":3,
#     ...

# }
# loop this array
# put each element into my_hash{}  => using the number as key and value
# before we put it into the obj, we have to check if this key already existed
# => this is the repeated number
# => put this into the obj
my_hash ={}
for element in arr do
    if my_hash[element]
        puts element
        break
    else
        my_hash[element] = element
    end
end

