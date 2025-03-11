import { parseArticle } from '@/lib/services/parseArticle';

describe('parseArticle', () => {
  test('有効なデータを渡した場合、Articleを返す', () => {
    const raw = {
      id: 'valid-id',
      title: '有効なタイトル',
      content: 'コンテンツ',
      publishedAt: '2025-03-01'
    };

    const result = parseArticle(raw);

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.title).toBe('有効なタイトル');
    }
  });

  test('無効なデータを渡した場合、エラーを返す', () => {
    const raw = null; // 明らかに無効なデータ

    const result = parseArticle(raw);

    expect(result.ok).toBe(false);
  });
});
