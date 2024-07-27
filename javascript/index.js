import { ArgumentParser } from 'argparse';
import { Socket } from './network/network.js';

const parser = new ArgumentParser({ description: 'Starts the bot' });
parser.add_argument('-s', '--secret', { help: 'The secret that authenticates your bot', required: true });
parser.add_argument('-r', '--rank', { help: 'If set, the bot will play ranked game', action: 'store_true' });

const { rank, secret } = parser.parse_args();

let channel = 'wss://jdis-ia.dinf.fsci.usherbrooke.ca:8088/echo';
if (rank) {
    channel = 'wss://jdis-ia.dinf.fsci.usherbrooke.ca:8087/echo';
}


(new Socket(channel, secret)).run();