const getTheTitles = function (books) {
    const titles = [];
    for (let i = 0; i < books.length; i++) {
        titles.push(books[i].title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
