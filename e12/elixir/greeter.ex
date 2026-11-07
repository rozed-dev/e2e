# Fixture E12: Elixir.
defmodule Greeter do
  def greet(name, excited \\ false) do
    if excited, do: "Hello, #{name}!!", else: "Hello, #{name}!"
  end
end
