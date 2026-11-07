"""Fixture E6: Python helpers."""


def slugify(text):
    return "-".join(text.lower().split())


def truncate(text, limit):
    return text if len(text) <= limit else text[: limit - 3] + "..."
