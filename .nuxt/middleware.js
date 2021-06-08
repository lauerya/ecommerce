const middleware = {}

middleware['is-authenticated'] = require('../middleware/is-authenticated.js')
middleware['is-authenticated'] = middleware['is-authenticated'].default || middleware['is-authenticated']

export default middleware
