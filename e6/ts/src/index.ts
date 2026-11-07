import { initials } from "./names";
import { fullName, isAdmin, type User } from "./user";

export function greet(user: User): string {
  const badge = isAdmin(user) ? " (admin)" : "";
  return `Hello, ${fullName(user)}${badge}!`;
}

export function monogram(user: User): string {
  return initials(fullName(user));
}
