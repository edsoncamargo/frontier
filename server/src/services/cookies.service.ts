export function extractToken(request: any) {
  return request.cookies['AUTH-FRONTIER'];
}
