"""Fixture E6: a Python app that uses util."""

from util import slugify


def page_path(title):
    return "/pages/" + slugify(title)
