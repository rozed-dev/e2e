"""Fixture E9: a block is wrapped in a new if, so only the if is new."""


def save(path, data, log):
    tmp = path + ".tmp"
    with open(tmp, "wb") as out:
        out.write(data)
    log.append(f"saved {len(data)} bytes to {path}")
    return tmp
