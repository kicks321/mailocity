"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
const typeorm_1 = require("typeorm");
const typedi_1 = require("typedi");
const user_entity_1 = require("@/database/entity/user.entity");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("@/config"));
let AuthService = class AuthService {
    constructor(logger) {
        this.logger = logger;
    }
    SignUp(userSignUpOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userRepo = (0, typeorm_1.getRepository)(user_entity_1.User);
                const user = userRepo.create({
                    username: userSignUpOptions.username,
                    password: userSignUpOptions.password,
                    email: userSignUpOptions.username,
                    createdDate: new Date()
                });
                yield userRepo.save(user).catch((err) => {
                    throw new Error(err.sqlMessage);
                });
                if (!user) {
                    throw new Error('User cannot be created');
                }
                else {
                    console.log("New User Saved", user);
                }
                this.logger.silly('Generating JWT');
                const token = this.generateToken(user);
                return { user, token };
            }
            catch (e) {
                this.logger.error(e);
                throw e;
            }
        });
    }
    SignIn(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userRepo = (0, typeorm_1.getRepository)(user_entity_1.User);
                const userRecord = yield userRepo.find({ where: { username: username } });
                if (userRecord.length <= 0 || !userRecord) {
                    throw new Error('User not registered');
                }
                const user = userRecord[0];
                this.logger.silly('Generating JWT');
                const token = this.generateToken(user);
                return { user, token };
            }
            catch (e) {
                this.logger.error(e);
                throw e;
            }
        });
    }
    generateToken(user) {
        const today = new Date();
        const exp = new Date(today);
        exp.setDate(today.getDate() + 60);
        this.logger.silly(`Sign JWT for userId: ${user.id}`);
        return jsonwebtoken_1.default.sign({
            id: user.id,
            user: user.username,
            exp: exp.getTime() / 1000,
        }, config_1.default.jwtSecret);
    }
};
AuthService = __decorate([
    (0, typedi_1.Service)(),
    __param(0, (0, typedi_1.Inject)('logger')),
    __metadata("design:paramtypes", [Object])
], AuthService);
exports.default = AuthService;
//# sourceMappingURL=AuthService.js.map