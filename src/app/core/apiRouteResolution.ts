import { environment } from 'src/environments/environment';

export function resolveApiRoute(path: string): string {
  // Strip any duplicate slashes
  if (path.charAt(0) === '/') {
    path = path.substr(1);
  }

  if (environment.production || !environment.useMirage) {
    return `${environment.apiUrl}${path}`;
  } else {
    return `http://localhost:4200/api/${path}`;
  }
}
