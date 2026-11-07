"""Fixture E9: two lines move below describe(), too few to count as a move."""

TIMEOUT_SECONDS = 30
RETRY_LIMIT = 3


def describe():
    parts = [
        f"timeout {TIMEOUT_SECONDS}s",
        f"{RETRY_LIMIT} retries",
    ]
    return ", ".join(parts)


def main():
    print(describe())
