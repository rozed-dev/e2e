// Fixture E9: fullName moves from here into the Names class in names.ts.

export interface User {
  first: string;
  middle?: string;
  last: string;
  email: string;
}

export function emailDomain(user: User): string {
  return user.email.split("@")[1] ?? "";
}

export function isValid(user: User): boolean {
  return user.first.length > 0 && user.last.length > 0;
}
