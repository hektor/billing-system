import { ajax } from 'rxjs/ajax'

const users = ajax.getJSON('https://api.github.com/users')

export { users }
