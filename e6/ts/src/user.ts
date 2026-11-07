import { capitalize } from "./names";

export interface User {
  first: string;
  last: string;
}

export function fullName(user: User): string {
  return `${capitalize(user.first)} ${capitalize(user.last)}`;
}
