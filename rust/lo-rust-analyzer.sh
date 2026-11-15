#!/bin/sh
# Fixture: a program rust-analyzer's settings name. Writes the empty file lo-hostile-rust-analyzer beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-rust-analyzer"
exit 1
