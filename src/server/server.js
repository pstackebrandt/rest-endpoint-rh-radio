// file: server.js

/**
 * Ermöglicht die Konfiguration eines
 * Ports und dessen Konfiguration und Ueberwachung
 * @type {e | (() => Express)}
 */
import express from "express"
import cors from "cors"

/**
 * Router, welcher auf einem
 * gesetzten Pfad die GET, POST, PUT - und DELETE-Anfragen
 * verarbeitet und passende Anfragen an die Datenbank
 * triggert.
 */
import apiRouter from "../routes/api-router.js"

/**
 * Express-Objekt, welches für
 * die passenden Routes und Überwachung
 * konfiguriert und ausgeführt wird
 * @type {Express}
 */
const serverApplication = express()

const APPLICATION_PORT = 3001
const HOST_NAME = "localhost"
const MAX_ALLOWED_CONNECTIONS = 20;

const applicationHeader = `
    ##################################
    # HipDipDauerwelle - REST-Server #
    ##################################
    
    Status: gestartet
    Link: http://localhost: ${APPLICATION_PORT}
`
const welcomeMessage = "Willkommen zum REST-Endpoint von HipDipDauerwelle :D";

// cors: allow clients from this location only
// curl or browser don't need that allowance
const allowedOrigin = "http://localhost:3000"

serverApplication.use(cors({
    origin: allowedOrigin
}));

//Festlegen, dass die Hauptdatenkommunikation per JSON funktionieren wird
serverApplication.use(express.json())

serverApplication.use((req, res, next) => {
    console.log('Anfrage-Methode:', req.method);
    console.log('Anfrage-Pfad:', req.path);
    console.log('Query-Parameter:', req.query);
    console.log('Body-Inhalt:', req.body);
    next();
});


serverApplication.get("/", (requestToServer,responseToClient) =>  responseToClient.send(welcomeMessage))
serverApplication.use("/api",apiRouter)


//Portueberwachung anschalten und nach obiger Konfiguration ausfuehren
serverApplication.listen(
    (process.env.PORT || APPLICATION_PORT),
    HOST_NAME,
    MAX_ALLOWED_CONNECTIONS,
    () => {
    console.log(applicationHeader);
});