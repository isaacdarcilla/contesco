import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { inject } from '@adonisjs/core/build/standalone';
import User from '../../Models/User';
import UsersService from '../../Services/UsersService';

@inject(UsersService)
export default class UsersController {
  constructor(private readonly usersService: UsersService) { }

  public async index({ request }: HttpContextContract): Promise<User[]> {
    return await this.usersService.all({
      page: request.input('page'),
      pagination: request.input('pagination')
    });
  }
}
