def hash_info
    result = {}
    puts "Please enter your first name"
    result["first name"] = gets.chomp

    puts "Please enter your last name"
    result["last name"] = gets.chomp

    puts "Please enter your city of birth"
    result["city of birth"] = gets.chomp

    puts "Please enter your age"
    result["age"] = gets.chomp

    p result
end

hash_info