#!/bin/sh
# Fixture: a program a package's build tool plugin runs. Writes the empty file lo-hostile-swift-plugin beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-swift-plugin"
exit 1
