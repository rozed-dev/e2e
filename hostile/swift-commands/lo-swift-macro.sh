#!/bin/sh
# Fixture: a macro's plugin that compile commands name. Writes the empty file lo-hostile-swift-macro beside itself, and nothing else.
: >"$(dirname "$0")/lo-hostile-swift-macro"
exit 1
