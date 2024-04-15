"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, 'client')));
app.use(express_1.default.static(path_1.default.join(__dirname, '/client/Content/style.css')));
app.use(express_1.default.static(path_1.default.join(__dirname, '/client/Data/')));
app.use(express_1.default.static(path_1.default.join(__dirname, '/client/assets/images/')));
app.use(express_1.default.static(path_1.default.join(__dirname, '/client/Script/')));
app.use(express_1.default.static(path_1.default.join(__dirname, 'node_modules')));
app.use('/', index_1.default);
app.use('/users', users_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map