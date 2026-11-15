#!/bin/sh
# Fixture: a program Gradle's settings script runs. Writes the empty file lo-hostile-gradle-settings beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-gradle-settings"
exit 1
