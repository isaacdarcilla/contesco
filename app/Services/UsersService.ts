import User from "App/Models/User";

export default class UsersService {

  /**
   * Get paginated user data
   */
  public async all({ page, pagination }): Promise<User[]> {
    return await User.query().paginate(page, pagination);
  }

  /**
   * Find user by ID
   */
   public async findById(id: number): Promise<User | null> {
    return await User.find(id);
  }
}
