print " input a number: "
num = gets.to_i
for i in 1..num
    puts " " * (num - i) + "O " * i
end