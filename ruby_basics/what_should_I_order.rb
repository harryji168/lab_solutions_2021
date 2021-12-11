puts "input a shop's name: "
shopName =  gets.chomp
case shopName
when "Starbucks"
    puts "Grande Latte"
when "Tim Hortons"
    puts "Double Double"
when "Blenz"
    puts "Medium Coffee"
else
    puts "I don't know this shop"
end