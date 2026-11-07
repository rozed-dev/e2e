//! Renders a title as HTML. Its `parse` shares a name with `crate::parse::parse`.

/// Parses `title` into an HTML heading, escaping angle brackets.
pub fn parse(title: &str) -> String {
    let escaped = title.replace('<', "&lt;").replace('>', "&gt;");
    format!("<h1>{escaped}</h1>")
}
