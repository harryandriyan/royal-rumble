import { romanToNum } from './modules/romanToNum';

export default function royalRumble(names = []) {
  if (names.length === 0) return names;
  return (
    names
      .map((n) => ({ name: n, num: romanToNum(n.split(" ").pop()) }))
      .sort((a, b) => {
        if (a.name < b.name && (a.num - b.num)) {
          return -1;
        }
      })
      .map(({ name, num }) => name)
  );
}