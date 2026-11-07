// Fixture E8 for Lo's trust handling: a Go toolchain that doesn't exist, so go would try to
// download it.
module example.com/e8

go 1.21

toolchain go1.99
