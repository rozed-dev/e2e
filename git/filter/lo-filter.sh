#!/bin/sh
# Fixture: a clean and smudge filter git's configuration names. Writes the empty file lo-hostile-filter beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-filter"
exit 1
