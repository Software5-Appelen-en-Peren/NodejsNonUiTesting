const articles = [];
let id = -1;
module.exports = {
    createArticle : (userId, title, text) => {
        id++; 
        articles.push({id, userId, title, text })
        return id;
    }, 
    articleExists : (id) => {
        const article = articles.find((article) => { return article.id === id; })
         return article === undefined ? false : true;
    }
}