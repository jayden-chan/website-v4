import {readdirSync, lstatSync} from 'fs';

export function throwIfErr(err: Error | null): void {
  if (err) throw err;
}

export function templateReplace(
  template: string,
  fields: {key: string; content: string}[],
): string {
  let output = template;

  fields.forEach(({key, content}) => {
    output = output.replace(new RegExp(`{{${key}}}`, 'g'), content);
  });

  return output;
}

type DirStats = {
  assets: string[];
  sizes: string[];
  times: string[];
};

function humanReadableSize(s: number): string {
  if (s < 1000) {
    return `${s} B`;
  } else if (s < 1000000) {
    return `${(s / 1000).toFixed(1)} K`;
  } else {
    return `${(s / 10000).toFixed(0)} M`;
  }
}

function bold(s: string): string {
  return '\u001b[1m' + s + '\u001b[22m';
}

function dirStatRecurse(dir: string, depth: number, s: DirStats): DirStats {
  const files = readdirSync(dir);

  files.forEach(f => {
    const fullPath = `${dir}/${f}`;
    const stats = lstatSync(fullPath);

    s.sizes.push(`${humanReadableSize(stats.size)}`);
    s.times.push(`${stats.mtime.toLocaleTimeString()}`);

    if (stats.isDirectory()) {
      s.assets.push(`${' '.repeat(depth * 2)}${f}/`);
      s = dirStatRecurse(fullPath, depth + 1, s);
    } else {
      s.assets.push(`${' '.repeat(depth * 2)}${f}`);
    }
  });

  return s;
}

export function dirStat(dir: string): void {
  const stats = dirStatRecurse(dir, 0, {
    assets: [],
    sizes: [],
    times: [],
  });

  const maxAssetWidth = stats.assets
    .map(r => r.length)
    .reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    });

  const maxSizeWidth = stats.sizes
    .map(r => r.length)
    .reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    });

  const maxTimeWidth = stats.times
    .map(r => r.length)
    .reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    });

  const asset = bold('Asset'.padEnd(maxAssetWidth, ' '));
  const size = bold('Size'.padStart(maxSizeWidth, ' '));
  const time = bold('Completed'.padEnd(maxTimeWidth, ' '));
  const dirHeader = bold('Location'.padEnd(dir.length, ' '));

  console.log(`${asset}  ${size}  ${time}  ${dirHeader}`);

  for (let i = 0; i < stats.assets.length; i++) {
    const asset = stats.assets[i].padEnd(maxAssetWidth, ' ');
    const size = stats.sizes[i].padStart(maxSizeWidth, ' ');
    const time = stats.times[i].padEnd(maxTimeWidth, ' ');

    console.log(`${asset}  ${size}  ${time}  ${dir}`);
  }
}
