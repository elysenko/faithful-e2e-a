export const environment = {
  production: true,
  // The app is served behind the ingress under `/faithful-e2e-a`; that prefix must
  // be included so API calls route through the ingress (which strips it before
  // forwarding `/api/...` to the NestJS backend).
  apiUrl: '/faithful-e2e-a/api',
};
