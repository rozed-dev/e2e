"""Fixture E6: a Python app that uses util."""

from util import slugify, truncate


def page_path(title):
    return "/pages/" + slugify(truncate(title, 40))


def page_link(title):
    return f'<a href="{page_path(title)}">{title}</a>'
