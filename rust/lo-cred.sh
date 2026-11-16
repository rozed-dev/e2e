#!/bin/sh
# Fixture: a credential provider a crate's config names. Writes the empty file lo-hostile-cred beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-cred"
exit 1
