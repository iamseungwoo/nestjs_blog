import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersController } from "./users/users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeORMConfig } from "./config/typeorm.config";
import { UsersService } from "./users/users.service";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
