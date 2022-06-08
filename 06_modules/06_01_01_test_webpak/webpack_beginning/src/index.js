import './styles/index.scss'

const userStock = {
  language: 'JavaScript',
  framework: 'Vue.js',
}

const user = {
  name: 'Sergey',
  age: 58,
  ...userStock
}

console.log(user);