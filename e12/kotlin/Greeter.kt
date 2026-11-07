// Fixture E12: Kotlin.
class Greeter(private val name: String, private val excited: Boolean = false) {
    fun greet(): String = if (excited) "Hello, $name!!" else "Hello, $name!"
}
