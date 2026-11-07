import { fullName, type User } from "./user";

export function greet(user: User): string {
  return `Hello, ${fullName(user)}!`;
}
