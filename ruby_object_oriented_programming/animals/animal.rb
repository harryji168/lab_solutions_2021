class Animals
    attr_accessor :name, :color
    def initialize(name,color)
      @name = name
      @color = color
    end
    def eat
        puts "I'm eating"
    end
    
    def walk
        puts "I'm walking"
    end
    
end

