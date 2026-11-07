// Fixture E12: C#.
namespace E12;

public sealed class Greeter(string name)
{
    public string Greet() => $"Hello, {name}!";
}
