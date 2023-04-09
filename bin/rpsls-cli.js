#!/usr/bin/env node
import minimist from 'minimist'
import { rpsls } from 'node-rpsls'


const args = minimist(process.argv.slice(2));
const rules = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n\n',
    ' - Scissors CUTS Paper\n',
    ' - Paper COVERS Rock\n',
    ' - Rock SMOOSHES Lizard\n',
    ' - Lizard POISONS Spock\n',
    ' - Spock SMASHES Scissors\n',
    ' - Scissors DECAPITATES Lizard\n',
    ' - Lizard EATS Paper\n',
    ' - Paper DISPROVES Spock\n',
    ' - Spock VAPORIZES Rock\n',
    ' - Rock CRUSHES Scissors`;

const helpMessage= `Usage: node-rpsls [SHOT]\nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n\n',
    '  -h, --help        display this help message and exit\n',
    '  -r, --rules       display the rules and exit\n\nExamples:\n',
    '  node-rpsls        Return JSON with single player RPSLS result.\n',
    '                    e.g. {"player":"rock"}\n',
    '  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.\n',
    '                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`;


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
    console.log(JSON.stringify(rpsls(rps(action))));
    
} catch (e){
    console.log(helpMessage);
    console.log(rules);
    process.exit(0);
}
