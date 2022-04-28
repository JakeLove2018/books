const getMeta = () => {
    return {
        meta: {
            createAt: {
                type: Number,
                default: +new Date()
            },
            updateAt: {
                type: Number,
                default: +new Date()
            }
        }
    }
}
module.exports = {
    getMeta
}