#!/bin/sh
# Fixture: a program Directory.Build.targets runs. Writes the empty file lo-hostile-msbuild-targets beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-msbuild-targets"
exit 1
