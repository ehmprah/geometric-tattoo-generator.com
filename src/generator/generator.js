import v1 from '@/generator/v1';
import v2 from '@/generator/v2';

const versions = {
  v1,
  v2,
};

export function generate(version, hash) {
  return versions[version](hash);
}
