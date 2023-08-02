export function getUserNoticeAboutTheDocumentation() {
    return async (requestToServer, responseToClient) => {
        responseToClient.send({
            baseUrl: "http://localhost:3001/api/",
            documentationUrl: "GET baseUrl/documentation",
            message:"RTFM"
        })
    }
}

export function getDocumentation() {
    return async (requestToServer, responseToClient) => {
        responseToClient.send({
            baseUrl: "http://localhost:3001/api/",
            newsArticles: "baseUrl/news-articles",
            getNewsArticles: "GET baseUrl/news-articles",
            getNewsArticle: "GET baseUrl/news-articles/:news_id",
            insertNewsArticle: "POST baseUrl/news-articles",
            updateNewsArticle: "PUT baseUrl/news-articles",
            deleteNewsArticle: "DELETE baseUrl/news-articles/:news_id",
            exampleJsonNewsArticle: {
                news_id: -1,
                news_headline: "Headline",
                news_content: "Content",
            },

            employees: "baseUrl/employees",
            getEmployees: "GET baseUrl/employees",
            getEmployee: "GET baseUrl/employees/:employees_id",
            insertEmployee: "POST baseUrl/employees",
            updateEmployee: "PUT baseUrl/employees",
            deleteEmployee: "DELETE baseUrl/news-articles/:employees_id",
            exampleJsonEmployee: {
                employee_id: -1,
                full_name: "John Doe",
                information: "A cool dude",
                department: "Radio Shows",
                job: "Radio Moderator",
            },
        })
    }
}
