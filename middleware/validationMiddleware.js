module.exports = (req, res, next) => {
    const {name, author, publishedYear} = req.body;
    if (!name || !author || !publishedYear) {
        return res.status(400).json({error: 'Name, Author, and Published Year are required.'});
    }
    if (typeof publishedYear !== 'number') {
        return res.status(400).json({error: 'Published Year must be a number.'});
    }
    next();
};
