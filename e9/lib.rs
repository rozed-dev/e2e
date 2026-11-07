//! Fixture E9: `checksum` moves up this file, unchanged.

pub fn parse_header(line: &str) -> Option<(&str, &str)> {
    let (name, value) = line.split_once(':')?;
    Some((name.trim(), value.trim()))
}

pub fn checksum(bytes: &[u8]) -> u32 {
    let mut sum: u32 = 0;
    for byte in bytes {
        sum = sum.wrapping_mul(31).wrapping_add(u32::from(*byte));
    }
    sum
}

pub fn parse_headers(text: &str) -> Vec<(&str, &str)> {
    text.lines().filter_map(parse_header).collect()
}

pub fn header_names(text: &str) -> Vec<&str> {
    parse_headers(text).into_iter().map(|(name, _)| name).collect()
}

pub fn has_header(text: &str, wanted: &str) -> bool {
    header_names(text)
        .iter()
        .any(|name| name.eq_ignore_ascii_case(wanted))
}
