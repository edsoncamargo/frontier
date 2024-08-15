export class ClientError extends Error {
  status: number = 400;

  constructor(message: string, status?: number) {
    super(message);
    this.status = status ?? 400;
  }
}
