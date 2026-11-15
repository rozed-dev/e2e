#!/bin/sh
# Fixture: a program a //go:generate line names. Writes the empty file lo-hostile-go-generate beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-go-generate"
exit 1
