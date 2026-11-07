# Fixture E12: Ruby.
class Greeter
  def initialize(name, excited: false)
    @name = name
    @excited = excited
  end

  def greet
    @excited ? "Hello, #{@name}!!" : "Hello, #{@name}!"
  end
end
