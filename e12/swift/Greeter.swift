// Fixture E12: Swift.
struct Greeter {
    let name: String
    var excited = false

    func greet() -> String {
        excited ? "Hello, \(name)!!" : "Hello, \(name)!"
    }
}
