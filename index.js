import chalk from 'chalk';
import axios from 'axios';
import scripts from './scripts.js';
import { configs } from './scripts.js';

scripts();
configs();

axios.get( "https://dog.ceo/api/breeds/image/random Fetch!"
)
