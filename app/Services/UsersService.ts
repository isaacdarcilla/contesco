import User from "App/Models/User";

export default class UsersService {

  /**
   * Get paginated user data
   * @param param
   * @returns
   */
  public async all({ page, pagination }): Promise<User[]> {
    return await User.query().paginate(page, pagination);
  }
}
