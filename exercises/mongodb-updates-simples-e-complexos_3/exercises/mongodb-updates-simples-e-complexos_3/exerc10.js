db.movies.find({ category: { $size: 2 } }, {_id: 0, title: 1, category: 1 }).pretty();