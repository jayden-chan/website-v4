export function htmlEscape(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function throwIfErr(err: Error | null): void {
  if (err) throw err;
}

export function templateReplace(
  template: string,
  fields: {
    key: RegExp;
    content: (substring: string, ...args: any[]) => string;
  }[]
): string {
  let output = template;

  fields.forEach(({ key, content }) => {
    output = output.replace(key, content);
  });

  return output;
}
