[![npm version](https://img.shields.io/npm/v/royal-rumble.svg?style=flat-square)](https://www.npmjs.com/package/royal-rumble)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# royal-rumble
A npm module to sort royal name.

## Instalation
Avalilable in npm, use this command to instalation
```
yarn add royal-rumble
```
or
```
npm install royal-rumble
```

## Documentations
### Sorting royal names
```
  import { royalRumble } from "royal-rumble"
  const royalNames = ["Ali V", "Bangi II", "Robert III", "Stannis II", "Cersei IX"]

  const sortedRoyalNames = royalRumble(royalNames)

  console.log(sortedRoyalNames);
  // output: ["Ali V", "Bangi II", "Cersei IX", "Robert III", "Stannis II"]
```

## Contributor
 - [harryandriyan](https://github.com/harryandriyan)
 
