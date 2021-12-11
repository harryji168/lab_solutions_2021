def pluck(hashes,key_name)
  result = []
  # loop this array
  # check the hash(element) 
  # if it has the key => hash[key_name]? push the value of this key into the result array
  # if not => hash[key_name] = nil => push nil into the result array
  for element in hashes do
    if element[key_name] != nil
      result << element[key_name]
    else
      result << nil
    end
  end
  p result
end

pluck([{a:1}, {a:2}], :a) ## returns [1,2]
pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a) ## returns [nil, 4, 1, nil]
pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b) ## returns [2,4,nil,nil]