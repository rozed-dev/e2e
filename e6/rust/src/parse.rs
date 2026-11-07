//! Splits text into words.

/// Splits `text` into words, on whitespace.
pub fn parse(text: &str) -> Vec<&str> {
    text.split_whitespace().collect()
}

/// Counts the words in `text`.
pub fn count(text: &str) -> usize {
    parse(text).len()
}
