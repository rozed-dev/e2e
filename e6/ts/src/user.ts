import { capitalize } from "./names";

export interface User {
  first: string;
  last: string;
  admin?: boolean;
}

export function fullName(user: User): string {
  return `${capitalize(user.first)} ${capitalize(user.last)}`;
}

export function isAdmin(user: User): boolean {
  return user.admin === true;
}
