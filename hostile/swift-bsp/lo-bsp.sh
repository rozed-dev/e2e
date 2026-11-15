#!/bin/sh
# Fixture: a build server SourceKit-LSP starts. Writes the empty file lo-hostile-bsp beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-bsp"
exit 1
