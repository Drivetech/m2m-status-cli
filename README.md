# m2m-status-cli

[![npm version](https://img.shields.io/npm/v/m2m-status-cli.svg?style=flat-square)](https://www.npmjs.com/package/m2m-status-cli)
[![npm downloads](https://img.shields.io/npm/dm/m2m-status-cli.svg?style=flat-square)](https://www.npmjs.com/package/m2m-status-cli)
[![dependency Status](https://img.shields.io/david/lgaticaq/m2m-status-cli.svg?style=flat-square)](https://david-dm.org/lgaticaq/m2m-status-cli#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/lgaticaq/m2m-status-cli.svg?style=flat-square)](https://david-dm.org/lgaticaq/m2m-status-cli#info=devDependencies)

> CLI to check status of your m2m-status sims

## Installation

```bash
npm i -g m2m-status-cli
```

## Use

```bash
m2m-status

Usage: m2m-status -u <user> -p <password> -s <sim>
Usage: m2m-status -u <user> -p <password> -i <icc>

CLI to check status of your m2m-status sims

Options:

  -h, --help                 output usage information
  -V, --version              output the version number
  -u, --user [user]          Add user
  -p, --password [password]  Add password
  -s, --sim [sim]            Add sim
  -i, --icc [icc]            Add icc
```

## Example

```bash
m2m-status -u your-user -p your-password -s +569XXXXXXXX
m2m-status -u your-user -p your-password -i XXXXXXXXXXXXXXXXXXX
```

## License

[MIT](https://tldrlegal.com/license/mit-license)
