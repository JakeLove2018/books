const auth = require('./auth/index.js');
const invite = require('./invite-code/index.js');
const book = require('./book/index.js');
module.exports = (app)=>{
    app.use(auth.routes())
    app.use(invite.routes())
    app.use(book.routes())
}