# Fixture E8: hostile files

A test fixture for Lo's trust handling, not real code. The files in this pull request try to run
code, or to steer a language server, when the repository is checked out and opened. Each one that
can run something runs only `e8/evil.sh`, which creates an empty marker file,
`$TMPDIR/lo-e8-<name>`. It uses no network, deletes nothing and reads nothing. Lo passes while no
marker appears.

| File | What it tries | Marker |
|---|---|---|
| `.cargo/config.toml` | `rustc-wrapper = "e8/evil.sh"`, so cargo runs it in place of rustc in `e8/rust/` and `e8/pinned/` | `lo-e8-rustc-wrapper` |
| `.zed/settings.json` | points rust-analyzer, gopls, vtsls and basedpyright at `e8/evil.sh` | `lo-e8-rust-analyzer`, `lo-e8-gopls`, `lo-e8-vtsls`, `lo-e8-basedpyright` |
| `node_modules/typescript/lib/tsserver.js` | a workspace TypeScript whose server runs `e8/evil.sh` | `lo-e8-tsserver` |
| `.venv/`, `pyrightconfig.json` | a virtual environment at the root, where Zed finds it and hands it to basedpyright, whose `bin/python` runs `e8/evil.sh` | `lo-e8-python` |
| `e8/pinned/rust-toolchain.toml` | toolchain 1.999.0, which doesn't exist, so rustup tries to download it from `static.rust-lang.org` | none |
| `go.mod` | `toolchain go1.99`, which doesn't exist, so go tries to download it from `proxy.golang.org` | none |

The two toolchain files can't run anything here: rustup refuses a toolchain `path` relative to its
file, and go only runs a toolchain it downloads or finds on `PATH`. A check sees them in the
servers' environments instead (`ps -E -p <pid>`): rust-analyzer's has `RUSTUP_TOOLCHAIN` set and
`RUSTUP_AUTO_INSTALL=0`, and gopls's has `GOTOOLCHAIN=local` and `GOPROXY=off`. No connection goes
to `static.rust-lang.org` or `proxy.golang.org`. The toolchain file has its own crate, so it can't
stop cargo in `e8/rust/` before cargo reaches the wrapper.
