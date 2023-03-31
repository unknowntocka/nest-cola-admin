import { readFileSync } from 'fs';
import { join } from 'path';
import { parse } from 'yaml';

export const getEnv = () => {
  return process.env.NODE_ENV;
};

export const getConfig = (property?: string) => {
  const env = getEnv();
  const filePath = join(process.cwd(), `./.config/${env}.yaml`);
  const file = readFileSync(filePath, 'utf8');
  const config = parse(file);
  return property ? config[property] : config;
};
