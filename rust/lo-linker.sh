#!/bin/sh
# Fixture: a linker a crate's config names for a target. Writes the empty file lo-hostile-linker beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-linker"
exit 1
