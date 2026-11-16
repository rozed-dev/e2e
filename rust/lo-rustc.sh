#!/bin/sh
# Fixture: a compiler a crate's config names as rustc. Writes the empty file lo-hostile-rustc beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-rustc"
exit 1
