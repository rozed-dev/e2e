# Fixture E8: hostile files

A test fixture for Lo's trust handling, not real code. The files in this pull request try to run
code, or to steer a language server, when the repository is checked out and opened. Each one leads
to `e8/evil.sh`, which only creates an empty marker file, `$TMPDIR/lo-e8-<name>`. It uses no
network, deletes nothing and reads nothing. Lo passes while no marker appears.

| File | What it tries | Marker |
|---|---|---|
| `.cargo/config.toml` | `rustc-wrapper = "e8/evil.sh"`, so cargo runs it in place of rustc | `lo-e8-rustc-wrapper` |
| `rust-toolchain.toml` | a toolchain that doesn't exist, so rustup tries to download it | none |
| `.zed/settings.json` | points rust-analyzer's binary at `e8/evil.sh` | `lo-e8-rust-analyzer` |
| `node_modules/typescript/lib/tsserver.js` | a workspace TypeScript whose server runs `e8/evil.sh` | `lo-e8-tsserver` |
| `pyrightconfig.json` | a virtual environment whose interpreter, `e8/venv/bin/python`, runs `e8/evil.sh` | `lo-e8-python` |
| `go.mod` | `toolchain go1.99`, a Go toolchain that doesn't exist, so go tries to download it | none |
