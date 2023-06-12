export class formatDate {
  static getYear(dateString: string): number {
    const date = new Date(dateString);
    return date.getFullYear();
  }
}
