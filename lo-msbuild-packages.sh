#!/bin/sh
# Fixture: a program Directory.Packages.props runs. Writes the empty file lo-hostile-msbuild-packages beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-msbuild-packages"
exit 1
