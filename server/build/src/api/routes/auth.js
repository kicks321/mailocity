"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthService_1 = __importDefault(require("@/services/AuthService"));
const celebrate_1 = require("celebrate");
const express_1 = require("express");
const typedi_1 = __importDefault(require("typedi"));
const route = (0, express_1.Router)();
exports.default = (app) => {
    app.use('/auth', route);
    route.post('/signup', (0, celebrate_1.celebrate)({
        body: celebrate_1.Joi.object({
            username: celebrate_1.Joi.string().required(),
            password: celebrate_1.Joi.string().required(),
        }),
    }), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('We made it here!!!');
        const logger = typedi_1.default.get('logger');
        logger.debug('Calling Sign-Up endpoint with body: %o', req.body);
        try {
            const authServiceInstance = typedi_1.default.get(AuthService_1.default);
            const user = yield authServiceInstance.SignUp(req.body);
            return res.status(201).json(Object.assign({}, user));
        }
        catch (e) {
            logger.error('🔥 error: %o', e);
            return next(e);
        }
    }));
    route.post('/signin', (0, celebrate_1.celebrate)({
        body: celebrate_1.Joi.object({
            username: celebrate_1.Joi.string().required(),
            password: celebrate_1.Joi.string().required(),
        }),
    }), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const logger = typedi_1.default.get('logger');
        logger.debug('Calling Sign-In endpoint with body: %o', req.body);
        try {
            const { username, password } = req.body;
            const authServiceInstance = typedi_1.default.get(AuthService_1.default);
            const { user, token } = yield authServiceInstance.SignIn(username, password);
            return res.status(201).json({ user, token });
        }
        catch (e) {
            logger.error('🔥 error: %o', e);
            return next(e);
        }
    }));
};
//# sourceMappingURL=auth.js.map