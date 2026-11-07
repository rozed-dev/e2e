#!/bin/sh
# Fixture E8 for Lo's trust handling. If this runs, a file in the pull request ran it. It creates
# one empty marker file, $TMPDIR/lo-e8-<name>, where <name> says which file ran it, and does
# nothing else: no network, no deletes, no reads. set -C refuses a file or link that's already
# there, so it never writes through a planted link; a marker that's there already is enough.
set -C
case ${1-} in
  rust-analyzer | gopls | vtsls | basedpyright | tsserver | python) name=$1 ;;
  *) name=rustc-wrapper ;; # cargo runs a rustc wrapper with rustc's path first
esac
{ true >"${TMPDIR:-/tmp}/lo-e8-$name"; } 2>/dev/null || true
