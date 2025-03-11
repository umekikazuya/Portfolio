import { createArticleId, createArticlePublished, createArticleTitle } from '@/domain/valueObjects/article';

describe('Value Object Tests', () => {
  test('createArticleId should return valid Result when given a string ID', () => {
    const result = createArticleId('123');
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toBe(123);
    }
  });

  test('createArticleId should return error for empty string', () => {
    const result = createArticleId('');
    expect(result.ok).toBe(false);
  });

  test('createArticleTitle should return valid Result when given a string title', () => {
    const result = createArticleTitle('Valid Title');
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toBe('Valid Title');
    }
  });

  test("createArticlePublished should return valid Result for ISO date", () => {
    const result = createArticlePublished("2024-12-03 00:00:00");
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toBeInstanceOf(Date);
      expect(result.value.toISOString()).toBe("2024-12-03T00:00:00.000Z"); // UTC 確認
    }
  });
  
  test("createArticlePublished should return error for invalid date", () => {
    const result = createArticlePublished("invalid-date");
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toBe("無効な公開日");
    }
  });
});

describe('Value Object Tests with Real Data', () => {
  const realData = {
    id: 3,
    title: '【キャリア】未経験で Drupal を選ぶのはあり？はい。ありです。',
    link: 'https://qiita.com/umekikazuya/items/ec8f0e796a1500387ceb',
    service: 'qiita',
    is_pickup: true,
    published: '2024-12-03 00:00:00'
  };

  test('createArticleId should return valid Result with real data', () => {
    const result = createArticleId(realData.id.toString());
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toBe(realData.id);
    }
  });

  test('createArticleTitle should return valid Result with real data', () => {
    const result = createArticleTitle(realData.title);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toBe(realData.title);
    }
  });

  test('createArticlePublished should return valid Result with real data', () => {
    const result = createArticlePublished(realData.published);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toBeInstanceOf(Date);
      expect(result.value.toISOString()).toBe("2024-12-03T00:00:00.000Z"); // UTC 確認
    }
  });
});
