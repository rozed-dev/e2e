#!/bin/sh
# Fixture: a program an editor's settings name. Writes the empty file lo-hostile-vscode beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-vscode"
exit 1
