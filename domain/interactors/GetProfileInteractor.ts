import { ProfileRepository } from '@/domain/repositories/ProfileRepository';
import { Profile } from '../entities/profile';

export class GetProfileInteractor {
  constructor(private repository: ProfileRepository) { }

  async handle(): Promise<Profile> {
    const result = await this.repository.fetch();
    if (!result.ok) {
      throw result.error;
    }
    return result.value;
  }
}
