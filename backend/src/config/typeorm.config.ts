import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "../entity/users/users.entity";

export const typeORMConfig: TypeOrmModuleOptions = {
  type: "mariadb",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1234",
  database: "nest_blog",
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
};
