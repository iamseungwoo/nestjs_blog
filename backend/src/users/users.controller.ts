import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";

@Controller("users")
export class UsersController {
  @Get()
  getAllUser() {
    return "get All user";
  }

  @Get(":id")
  getUser(@Param("id") userId: number) {
    return `get user id : ${userId}!`;
  }

  @Post()
  createUser(@Body() userData) {
    return `hello create user`;
  }

  @Delete(":id")
  removeUser(@Param("id") userId: number) {
    return `remove user id : ${userId}`;
  }
}
