// Fixture E9: fullName moves here from user.ts.

import type { User } from "./user";

export class Names {
  constructor(private readonly users: User[]) {}

  sorted(): string[] {
    return this.users.map((user) => user.last).sort();
  }
}
