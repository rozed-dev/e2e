#!/bin/sh
# Fixture: a program Eclipse's project builds with. Writes the empty file lo-hostile-eclipse-builder beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-eclipse-builder"
exit 1
