class Dog 
    def initialize(colour,type)
        @colour = colour
        @type = type
        @bones = []
    end
    
    def give(bone)
        if @bones.length >= 3
            puts "I have too many bones."
        else
            @bones  << bone
        end
    end
    
    def eat_bone
        if @bones.length > 0
            eated_bone = @bones.pop
            puts "Yummy! I ate a #{eated_bone.size} bone"
        else
            puts "You're out of bones :("
        end
    end
    
end

class Bones
    attr_accessor :size
    def initialize(size)
        @size = size
    end
end

black_dog=Dog.new('abc','black')

small_bone = Bones.new("small")
medium_bone = Bones.new("medium")
large_bone = Bones.new("large")

black_dog.give(small_bone)
black_dog.give(medium_bone)
black_dog.give(large_bone)

black_dog.eat_bone
black_dog.eat_bone
black_dog.eat_bone
black_dog.eat_bone