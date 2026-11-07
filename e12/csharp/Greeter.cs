// Fixture E12: C#.
namespace E12;

public sealed class Greeter(string name, bool excited = false)
{
    public string Greet() => excited ? $"Hello, {name}!!" : $"Hello, {name}!";
}
