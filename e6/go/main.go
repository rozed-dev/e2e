// Fixture E6: a Go program.
package main

import "fmt"

func main() {
	fmt.Println(greeting("world"))
}

func greeting(name string) string {
	return "Hello, " + name
}
