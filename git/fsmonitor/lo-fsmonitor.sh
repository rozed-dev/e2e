#!/bin/sh
# Fixture: a program git's fsmonitor setting names. Writes the empty file lo-hostile-fsmonitor beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-fsmonitor"
exit 1
