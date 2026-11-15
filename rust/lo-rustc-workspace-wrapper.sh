#!/bin/sh
# Fixture: a workspace wrapper around the Rust compiler. Writes the empty file lo-hostile-rustc-workspace-wrapper beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-rustc-workspace-wrapper"
exit 1
