// All internal links go through this so they stay correct regardless of the
// configured base path (root now, but a base path can be reintroduced safely).
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
}
