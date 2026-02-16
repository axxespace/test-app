export type Params = Record<string, string | number>;

export function format(template: string, params?: Params) {
  if (!params) return template;
  return template.replace(/\{(\w+)}/g, (_, k) => String(params[k] ?? `{${k}}`));
}
