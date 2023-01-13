export class UserError extends Error {
  constructor(msg: string) {
    super(msg)
  }

  getMessage(): string {
    return this.message
  }
}
