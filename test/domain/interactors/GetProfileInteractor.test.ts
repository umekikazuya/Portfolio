import { GetProfileInteractor } from "@/domain/interactors/GetProfileInteractor";
import { ProfileRepository } from "@/domain/repositories/ProfileRepository";
import { Profile } from "@/domain/entities/profile";
import { ProfileAddress, ProfileFrom, ProfileGitHub, ProfileId, ProfileIntroduction, ProfileJob, ProfileLikes, ProfileName, ProfileQiita, ProfileShortName, ProfileSkill, ProfileZenn } from "@/domain/valueObjects/profile";

describe('GetProfileInteractor', () => {
  let mockRepository: ProfileRepository;

  beforeEach(() => {
    mockRepository = {
      fetch: jest.fn(),
    };
  });

  test('正常にデータを取得できること', async () => {
    const profile: Profile = {
      id: 1 as ProfileId,
      display_short_name: 'Test Profile' as ProfileShortName,
      display_name: 'Test Profile' as ProfileName,
      address: 'Test Address' as ProfileAddress,
      from: 'Test From' as ProfileFrom,
      github: 'test' as ProfileGitHub,
      introduction: 'Test Introduction' as ProfileIntroduction,
      job: 'Test Job' as ProfileJob,
      likes: ['Test Likes'] as ProfileLikes,
      qiita: 'test' as ProfileQiita,
      skill: ['Test Skill'] as ProfileSkill,
      summary_introduction: 'Test Summary Introduction' as ProfileIntroduction,
      zenn: 'test' as ProfileZenn,
    };

    (mockRepository.fetch as jest.Mock).mockResolvedValue({ ok: true, value: profile });

    const interactor = new GetProfileInteractor(mockRepository);
    const result = await interactor.handle();

    expect(result).toEqual(profile);
    expect(mockRepository.fetch).toHaveBeenCalledTimes(1);
  });

  test('記事の取得に失敗した場合、エラーをスローする', async () => {
    const error = new Error('API通信エラー');

    (mockRepository.fetch as jest.Mock).mockResolvedValue({ ok: false, error });

    const interactor = new GetProfileInteractor(mockRepository);

    await expect(interactor.handle()).rejects.toThrow('API通信エラー');
    expect(mockRepository.fetch).toHaveBeenCalledTimes(1);
  });
});
