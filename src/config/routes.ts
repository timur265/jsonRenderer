export const routes = {
  uploadPage: "/",
  rendererPage: "/renderer",
} as const;

export type Route = typeof routes[keyof typeof routes];
