// Fixture E6: a Go program.
package main

import "fmt"

func main() {
	fmt.Println(greeting(shout("world")))
}

func greeting(name string) string {
	return "Hello, " + name
}
