import { conf as c } from './module1';
// import * as mod1 from './module1';
import Product from './module2';
import '../styles/main.scss'
import generateJoke from "./generateJoke"
import laughing from '../assets/laughing.svg'

const loughImg = document.getElementById('laughImg')
laughImg.src = laughing

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()

console.log(new Product('Apple'));
console.log(c);
// console.log(mod1.foo());
