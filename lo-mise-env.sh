#!/usr/bin/env bash
# Fixture: a script mise's configuration sources. Writes the empty file lo-hostile-mise beside itself, and nothing else.
: >"$(dirname "${BASH_SOURCE[0]}")/lo-hostile-mise"
