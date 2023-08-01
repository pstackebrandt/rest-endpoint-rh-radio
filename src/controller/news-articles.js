import daoNewsArticles from "../db/dao-news-articles.js";

export function getNewsArticles() {
    return async (requestToServer, responseToClient) => {

        try {
            var newsArticlesFromDb = await daoNewsArticles.getNewsArticles();

            responseToClient.send(newsArticlesFromDb);
        } catch (e) {
            console.log(e)
            responseToClient.sendStatus(500);
        }
    };
}

export function getNewsArticle() {
    return async (requestToServer, responseToClient) => {

        try {

            var newsId = requestToServer.params.news_id;
            var newsArticleFromDb = await daoNewsArticles.getNewsArticle(newsId)

            responseToClient.send(newsArticleFromDb)
        } catch (e) {
            console.log(e)
            responseToClient.sendStatus(500);
        }
    };
}

export function insertNewsArticle() {
    return async (requestToServer, responseToClient) => {

        try {
            var newsArticleToInsert = requestToServer.body

            var newsArticleValues = [
                newsArticleToInsert.news_headline,
                newsArticleToInsert.news_content,
            ];
            var insertResultInformation = await daoNewsArticles.insertNewsArticle(newsArticleValues)

            responseToClient.send(insertResultInformation)
        } catch (e) {
            console.log(e)
            responseToClient.sendStatus(500);
        }
    };
}

export function updateNewsArticle() {
    return async (requestToServer, responseToClient) => {
        try {
            var newsArticleToUpdate = requestToServer.body

            var newsArticleValues = [
                newsArticleToUpdate.news_headline,
                newsArticleToUpdate.news_content,
                newsArticleToUpdate.news_id
            ];

            var updateResultInformation = await daoNewsArticles.updateNewsArticle(newsArticleValues)

            responseToClient.send(updateResultInformation)
        } catch (e) {
            console.log(e)
            responseToClient.sendStatus(500);
        }
    };
}

export function deleteNewsArticle() {
    return async (requestToServer, responseToClient) => {
        try {

            var newsId = requestToServer.params.news_id;

            var deleteResultInformation = await daoNewsArticles.deleteNewsArticle(newsId)

            responseToClient.send(deleteResultInformation)
        } catch (e) {
            console.log(e)
            responseToClient.sendStatus(500);
        }
    };
}


