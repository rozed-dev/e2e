#!/bin/sh
# Fixture: a runner a crate's config names for a target. Writes the empty file lo-hostile-runner beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-runner"
exit 1
