require_relative 'animal'

class Dog < Animals
    def bark
        puts "wooooooof"
    end
    
    def eat
        super
        puts "Bones are yummy!"
    end
end

coffee = Dog.new('black','corgi')
coffee.bark
coffee.eat
