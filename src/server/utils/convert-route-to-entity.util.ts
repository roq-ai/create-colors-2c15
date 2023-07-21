const mapping: Record<string, string> = {
  companies: 'company',
  hues: 'hue',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
