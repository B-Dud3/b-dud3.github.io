// All internal links must go through this so the site works under
// the GitHub Pages base path (/Personal-Website/).
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
}
