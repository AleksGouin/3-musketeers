#!/usr/bin/env node

const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');
 /**
@description: Take the parameters the user wants to put, then call cash().
@param: {int} amount		The amount of money to convert 
		{string} to			The list of currencies to convert the amount into
		{string} from		The currency of the amount to convert
 **/
const config = new Conf();

const argv = process.argv.slice(2);

helpers(argv);

const command = {
  'amount': argv[0] || 1,
  'from': argv[1] || config.get('defaultFrom', 'USD'),
  'to':
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP', 'PLN'])
};

cash(command);
