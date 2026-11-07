// Fixture E9: fullName moves here from user.ts.

import type { User } from "./user";

export class Names {
  constructor(private readonly users: User[]) {}

  fullName(user: User): string {
    const first = user.first.trim();
    const middle = user.middle?.trim();
    const last = user.last.trim();
    return [first, middle, last].filter((name) => name).join(" ");
  }

  sorted(): string[] {
    return this.users.map((user) => user.last).sort();
  }
}
