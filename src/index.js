#!/usr/bin/env node

'use strict';

const program = require('commander');
const m2m = require('m2m-status');
const pkg = require('../package.json');
const updateNotifier = require('update-notifier');
const chalk = require('chalk');

updateNotifier({pkg}).notify();

program
  .version(pkg.version)
  .usage('-u <user> -p <password> -s <sim>')
  .description('CLI to check status of your m2m-status sims')
  .option('-u, --user [user]', 'Add user')
  .option('-p, --password [password]', 'Add password')
  .option('-s, --sim [sim]', 'Add sim')
  .option('-i, --icc [icc]', 'Add icc')
  .parse(process.argv);

if (program.user && program.password && (program.sim || program.icc)) {
  const client = new m2m({user: program.user, password: program.password});
  let method, data;
  if (program.sim) {
    method = 'checkSim';
    data = program.sim;
  } else {
    method = 'checkIcc';
    data = program.icc;
  }
  client[method](data).then(result => onResult(result)).catch(err => onError(err));
} else {
  program.help();
}

const onResult = result => {
  if (result.admin) {
    console.log(chalk.green('Administration: OK'));
  } else {
    console.log(chalk.red('Administration: Error'));
  }
  if (result.gsm) {
    console.log(chalk.green('GSM: OK'));
  } else {
    console.log(chalk.red('GSM: Error'));
  }
  if (result.gprs) {
    console.log(chalk.green('GPRS: OK'));
  } else {
    console.log(chalk.red('GPRS: Error'));
  }
};

const onError = err => console.log(chalk.red(err.message));
