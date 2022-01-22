import express from 'express';
import cors from 'cors';
import config from '@/config';
import routes from '@/api';
import MiddleWare from '@/api/middleware';
import { APIError, ErrorCodes, ErrorStatus } from '@/types';
// Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)

export default async ({ app }: { app: express.Application }) => {
    /**
     * Health Check endpoints
     */
    app.get('/status', (req, res) => {
        res.status(200).end();
    });
    app.head('/status', (req, res) => {
        res.status(200).end();
    });

    // Shows the real origin IP in the heroku or Cloudwatch logs
    app.enable('trust proxy');

    // The magic package that prevents frontend developers going nuts
    // Alternate description:
    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors());

    // Transforms the raw string of req.body into json
    app.use(express.json());

    /* LOAD ERROR HANDLERS */
    app.use(MiddleWare.TokenHandler);
    app.use(MiddleWare.ErrorHandler);

    // Load API routes
    app.use(config.api.prefix, routes());

    /// catch 404 and forward to error handler
    app.use((req, res, next) => {
        const error: APIError = {
            status: ErrorStatus.METHOD_NOT_ALLOWED,
            message: `'${req.method}' method not allowed`,
            source: req.originalUrl,
            errors: [],
        };
        next(error);
    });

    /// error handlers
    app.use((err, req, res, next) => {
        if (err.name === 'UnauthorizedError') {
            return res.status(err.status).send({ message: err.message }).end();
        }
        return next(err);
    });
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json(err);
    });
};
