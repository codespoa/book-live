import User from '@modules/Users/infra/mongoose/entities/User'
import IUsersRepository from '@modules/Users/repositories/IUsersRepository'
import ICreateUserDTO from '@modules/Users/dtos/ICreateUserDTO'
import IReturnUserDTO from '@modules/Users/dtos/IReturnUserDTO'

class UsersRepository implements IUsersRepository {
  public async getAllUsers(): Promise<IReturnUserDTO[]> | undefined {
    const allUsers = await User.find({})

    return allUsers
  }
  public async create(payload: ICreateUserDTO): Promise<IReturnUserDTO> {
    const { name, email, password } = payload

    const createAnUser = await User.create({
      name,
      email,
      password,
    })

    return createAnUser
  }
  public async findByEmail(email: string): Promise<IReturnUserDTO | undefined> {
    const findUser = await User.findOne({ email }).select('+password')

    return findUser
  }
  // public async findById(id: string): Promise<IReturnUserDTO | undefined> {}
  // public async save(user: IcreateUser): Promise<IReturnUserDTO> {}
  // public async remove(id: string): Promise<void> {}
}

export default UsersRepository
