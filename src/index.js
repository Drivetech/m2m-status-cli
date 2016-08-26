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
  .parse(process.argv);

if (program.user && program.password && program.sim) {
  const client = new m2m({user: program.user, password: program.password});
  client.checkSim(program.sim).then(result => {
    console.log(chalk.green(`Administration: ${result.admin ? 'OK' : 'Error'}`));
    console.log(chalk.green(`GSM: ${result.gsm ? 'OK' : 'Error'}`));
    console.log(chalk.green(`GPRS: ${result.gprs ? 'OK' : 'Error'}`));
  }).catch(err => console.log(chalk.red(err.message)));
} else {
  program.help();
}
