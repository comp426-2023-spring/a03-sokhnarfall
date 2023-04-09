#!/usr/bin/env node
import minimist from 'minimist'
import { rps } from 'node-rpsls'


const args = minimist(process.argv.slice(2));
const rules = `Rules for Rock Paper Scissors:
- Scissors CUTS Paper
- Paper COVERS Rock
- Rock CRUSHES Scissors`;

const helpMessage= `Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)
  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit
Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`;


if (args.h || args.help) {
  console.log(helpMessage);
  process.exit(0);
}


if (args.r || args.rules) {
  console.log(rules);
  process.exit(0);
}

let action = args._[0];

try {
    console.log(JSON.stringify(rps_function(action)));
    
} catch (e){
    console.log(helpMessage);
    console.log(rules);
    process.exit(0);
}





