#!/bin/sh
# Fixture: a program Directory.Build.props runs. Writes the empty file lo-hostile-msbuild-props beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-msbuild-props"
exit 1
