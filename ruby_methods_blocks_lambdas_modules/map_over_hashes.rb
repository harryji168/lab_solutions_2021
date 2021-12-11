def map_over_hash(para_hash)
    result = []
    for key, value in para_hash
        result.push(yield(key, value))
    end
    print result
end
map_over_hash({ name: "Cersei", profession: "Queen", mood: "bitter" }) do |key, value|
  "Her #{key.to_s} is #{value}"
end
# => ["Her name is Cersei", "Her profession is Queen", "Her mood is bitter"]

map_over_hash({ 2 => 5, 10 => 2, 5 => 6 }) { |key, value| key.to_s * value }
# => [ "22222", "1010", "555555" ]