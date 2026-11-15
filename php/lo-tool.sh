#!/bin/sh
# Fixture: a tool Phpactor's configuration names. Writes the empty file lo-hostile-phpactor beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-phpactor"
exit 1
