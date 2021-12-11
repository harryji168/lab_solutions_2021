def most_common_letter(string)
    # "aaaabbc"
    # {
    #     "a"=> 1 + 1 + 1 +1 ,
    #     "b"=>1 +1,
    #     "c" => 1
    # }
    temp_hash = {}
    # loop this string
    # check every element if it's inside the hash
    # if it not is inside this hash => use this element as the key {"a":}, 1 as the value => {"a":1}
    # if it is inside this hash => get the value of this element, then + 1 on it => set it back to the hash => {"a":2}
    # loop this hash to get the biggest number
    # return the key
    string = string.delete(" ") # make it clean
    string.each_char do |letter|
        if temp_hash[letter] == nil
            # it's not there 
            temp_hash[letter] = 1
        else
            temp_hash[letter] += 1
        end
    end
    p temp_hash

    # {"a"=>4, "b"=>2, "c"=>1}
    # compare the values   
    # make a init_key
    # get the value of the init_key => temp_hash[init_key]
    # get the value of the current key => temp_hash[key]
    # compare the tow values
    # if the current one is greater that the init_key, set the current key to init_key
    # if not, don't do anyting, go to the next loop
    # return the init_key

    init_key = string[0] 

    temp_hash.each_key{|key|
       if temp_hash[key] > temp_hash[init_key]
        init_key = key
       end
    }
    puts init_key
end


most_common_letter("aaaabbc") # => "a" 
most_common_letter("T a d c g d g d d n") # => "d"
most_common_letter("1111 monkeys on the wall") # => "1"