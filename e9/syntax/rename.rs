//! Fixture E9: `total` is renamed to `sum`, so only the name changes.

pub fn average(values: &[f64]) -> f64 {
    if values.is_empty() {
        return 0.0;
    }
    let total: f64 = values.iter().sum();
    total / values.len() as f64
}
