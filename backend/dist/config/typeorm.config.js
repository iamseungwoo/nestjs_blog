"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
const users_entity_1 = require("../entity/users/users.entity");
exports.typeORMConfig = {
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "nest_blog",
    synchronize: true,
    logging: true,
    entities: [users_entity_1.User],
    subscribers: [],
    migrations: [],
};
//# sourceMappingURL=typeorm.config.js.map