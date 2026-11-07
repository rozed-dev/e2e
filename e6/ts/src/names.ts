// Fixture E6: name helpers the pull request calls but doesn't change.

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter((part) => part.length > 0)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
