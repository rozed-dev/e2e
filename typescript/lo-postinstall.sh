#!/bin/sh
# Fixture: an npm install script. Writes the empty file lo-hostile-postinstall beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-postinstall"
exit 1
