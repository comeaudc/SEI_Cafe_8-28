const create = (req, res) => {
    res.json({
        user: {
            name: 'Mariluz',
            email: 'req.body.email'
        }
    })
}

module.exports = {
    create
}


