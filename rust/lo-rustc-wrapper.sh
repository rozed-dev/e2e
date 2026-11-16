#!/bin/sh
# Fixture: a wrapper around the Rust compiler. Writes the empty file lo-hostile-rustc-wrapper beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-rustc-wrapper"
exit 1
