package main

import "strings"

// shout upper-cases name and adds an exclamation mark.
func shout(name string) string {
	return strings.ToUpper(name) + "!"
}
