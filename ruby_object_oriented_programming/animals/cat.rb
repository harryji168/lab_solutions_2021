require_relative 'animal'
class Cat < Animals
    def eat
        puts "Fish is yummy!"
    end
end

c = Cat.new('aaa','black')

c.eat