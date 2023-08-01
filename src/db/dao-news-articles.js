import dbConnection from "./db-connection.js"

const tableName = "\`news_articles\`"

const columnNewsId = "\`news_id\`"
const columNewsHeadline = "\`news_headline\`"
const columNewsContent = "\`news_content\`"

const WHERE_ID_EQUALS = ` WHERE ${columnNewsId} = ?`

const SELECT_ALL_FROM_TABLE = `SELECT * FROM ${tableName}`
const SELECT_ALL_FROM_TABLE_WHERE_ID_IS_EQUALS = `${SELECT_ALL_FROM_TABLE}${WHERE_ID_EQUALS}`

const INSERT_INTO_TABLE = `INSERT INTO ${tableName} (${columNewsHeadline}, ${columNewsContent}) VALUES (?,?)`
const UPDATE_TABLE = `UPDATE ${tableName} SET ${columNewsHeadline}=?,${columNewsContent}=?${WHERE_ID_EQUALS}`
const DELETE_FROM_TABLE_WHERE_ID_IS_EQUALS = `DELETE FROM ${tableName}${WHERE_ID_EQUALS}`

let daoNewsArticles = {}

daoNewsArticles.getNewsArticles = () => {
    return new Promise(((resolve, reject) => {

        dbConnection.query(SELECT_ALL_FROM_TABLE,
            (error, newsArticlesFromDb) => {

                if (error) {
                    return reject(error)
                }

                return resolve(newsArticlesFromDb)
            })
    }))
}

daoNewsArticles.getNewsArticle = (newsId) => {
    return new Promise(((resolve, reject) => {

        dbConnection.query(SELECT_ALL_FROM_TABLE_WHERE_ID_IS_EQUALS, newsId,
            (error, newsArticleFromDb) => {

                if (error) {
                    return reject(error)
                }

                return resolve(newsArticleFromDb)
            })
    }))
}

daoNewsArticles.insertNewsArticle = (newsArticleValues) => {
    return new Promise((resolve, reject) => {

        dbConnection.query(INSERT_INTO_TABLE, newsArticleValues,
            (error, insertResultInformation) => {

                if (error) {
                    return reject(error)
                }

                return resolve(insertResultInformation)
            });
    });
};

daoNewsArticles.updateNewsArticle = (newsArticleValues) => {
    return new Promise((resolve, reject) => {

        dbConnection.query(UPDATE_TABLE, newsArticleValues,
            (error, updateResultInformation) => {

                if (error) {
                    return reject(error)
                }

                return resolve(updateResultInformation)
            });
    });
};

daoNewsArticles.deleteNewsArticle = (newsId) => {
    return new Promise((resolve, reject) => {

        dbConnection.query(DELETE_FROM_TABLE_WHERE_ID_IS_EQUALS, newsId,
            (error, deleteResultInformation) => {

                if (error) {
                    return reject(error)
                }

                return resolve(deleteResultInformation)
            });
    });
};

export default daoNewsArticles;