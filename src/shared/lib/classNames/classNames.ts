export type Mods = Record<string, boolean | string>


export function classNames(
  className: string,
  modes: Mods | undefined = {},
  additional: Array<string|undefined> = [],
)
: string {
  return [
    className, ...additional.filter(Boolean), ...Object.entries(modes)
      .filter(([className, value]) => (value ? className : null))
      .map(([className]) => className),
  ].join(' ');
}

 