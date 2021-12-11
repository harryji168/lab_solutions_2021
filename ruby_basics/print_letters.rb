# print letters from a to z
# a => 1 => a,  b => 2 => bb

repeat = 1

for letter in ("a".."z").to_a
    # a...z => a to y
    # a..z  => a to z
    puts (letter + ' ') * repeat # print this letter repeat times => letter * 2 => letterletter
    repeat += 1
end