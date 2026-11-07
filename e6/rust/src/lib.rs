//! Fixture E6: Rust code for Lo's code navigation.

pub mod parse;

/// Summarises `text` by its word count.
pub fn summarize(text: &str) -> String {
    format!("{} words", parse::count(text))
}

/// Summarises a document's body.
pub fn run(body: &str) -> String {
    summarize(body)
}
