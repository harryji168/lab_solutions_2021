# Write some code that keeps asking the user for book names until the user 
# enters "exit". After typing "exit" the program should display all the entered book names 
# sorted and have the book names capitalized.

# make a CLI
# store all the names => put the names into an array
# once they input "exit" => end this CLI
# print the array (sorted)

print "Please enter a book name: "
user_input = gets.chomp

book_arr = []

while user_input != "exit"
    book_arr.push(user_input.capitalize)
    print "Please enter a book name: "
    user_input = gets.chomp
end

p book_arr.sort
