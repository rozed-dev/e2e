// Fixture E12: Java.
public final class Greeter {
    private final String name;
    private final boolean excited;

    public Greeter(String name, boolean excited) {
        this.name = name;
        this.excited = excited;
    }

    public String greet() {
        return "Hello, " + name + (excited ? "!!" : "!");
    }
}
