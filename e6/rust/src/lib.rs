//! Fixture E6: Rust code for Lo's code navigation.

use serde::Deserialize;

pub mod parse;
pub mod render {
    pub mod parse;
}

/// A document to describe. serde is never installed, so `Deserialize` never resolves.
#[derive(Deserialize)]
pub struct Document {
    pub title: String,
    pub body: String,
}

/// Describes `text` by its word count. It was `summarize`.
pub fn describe(text: &str) -> String {
    format!("{} words", parse::count(text))
}

/// Describes a document: its title as HTML, then its body.
pub fn run(doc: &Document) -> String {
    let title = render::parse::parse(&doc.title);
    let words = parse::parse(&doc.body);
    format!("{title} {} (first word: {:?})", describe(&doc.body), words.first())
}
