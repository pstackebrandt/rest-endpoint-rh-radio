// file api-router.js

import express from "express"

import {
    getNewsArticles,
    getNewsArticle,
    insertNewsArticle,
    updateNewsArticle,
    deleteNewsArticle
} from "../controller/news-articles.js";

import {
    getEmployee,
    getEmployees,
    insertEmployee,
    updateEmployee,
    deleteEmployee
} from "../controller/employees.js";

import {getDocumentation, getUserNoticeAboutTheDocumentation} from "../controller/documentation.js";

const apiRouter = express.Router();

const rootPath = "/"
const documentationPath = "/documentation";

const newsArticlesPath = "/news-articles";
const newsArticlesPathWithParameterNewsId = "/news-articles/:news_id";

const employeesPath = "/employees";
const employeesPathWithParameterEmployeeId = "/employees/:employee_id";

//  Logging-Middleware
// This will log the body content only if we also use the body-parser
// middleware. see server.js
apiRouter.use((req, res, next) => {
    console.log('Anfrage-Methode:', req.method);
    console.log('Anfrage-Pfad:', req.path);
    console.log('Query-Parameter:', req.query);
    console.log('Body-Inhalt:', req.body);
    next(); // Fahren Sie mit der nächsten Middleware oder Route fort
});

apiRouter.get(newsArticlesPath, getNewsArticles())
apiRouter.get(newsArticlesPathWithParameterNewsId, getNewsArticle())

apiRouter.post(newsArticlesPath, insertNewsArticle())
apiRouter.put(newsArticlesPath, updateNewsArticle())
apiRouter.delete(newsArticlesPathWithParameterNewsId, deleteNewsArticle())

apiRouter.get(employeesPath, getEmployees())
apiRouter.get(employeesPathWithParameterEmployeeId, getEmployee())

apiRouter.post(employeesPath, insertEmployee())
apiRouter.put(employeesPath, updateEmployee())
apiRouter.delete(employeesPathWithParameterEmployeeId, deleteEmployee())

export default apiRouter;