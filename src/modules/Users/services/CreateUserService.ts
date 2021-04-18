import { hash } from 'bcryptjs'

import { AppError } from '@shared/error'
import IUsersRepository from '@modules/Users/repositories/IUsersRepository'
import ICreateUserDTO from '@modules/Users/dtos/ICreateUserDTO'
import IReturnUserDTO from '@modules/Users/dtos/IReturnUserDTO'
import Service from '@shared/protocols/Service'

class CreateUserService implements Service {
  private usersRepository: IUsersRepository
  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository
  }

  public async execute(payload: ICreateUserDTO): Promise<IReturnUserDTO> {
    const checkUserExists = await this.usersRepository.findByEmail(
      payload.email
    )

    if (checkUserExists) throw new AppError('This user already in use', 409)

    const passwordHashed = await hash(payload.password, 12)

    const createAnUser = await this.usersRepository.create({
      name: payload.name,
      email: payload.email,
      password: passwordHashed,
    })

    return createAnUser
  }
}

export default CreateUserService
