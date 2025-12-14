// src/types/blog.ts

/**
 * microCMSのコンテンツ共通プロパティの型
 * （全てのAPIスキーマに共通して含まれる）
 */
type MicroCMSContent = {
  id: string;
  createdAt: string; // ISO 8601形式の文字列
  updatedAt: string; // ISO 8601形式の文字列
  publishedAt: string; // ISO 8601形式の文字列
  revisedAt: string; // ISO 8601形式の文字列;
};

/**
 * ブログ記事 (Blog) の型定義
 * category: [Array] の部分は、詳細な型が不明なため、ここでは一旦 string[] と仮定します。
 */
export type Blog = {
  title: string;
  contents: string; // HTML形式の本文
  category: string[]; // カテゴリのフィールドがどのように定義されているかによって変更が必要です
  thumbnail?: {
    url: string;
  }; // サムネイル画像オブジェクト（オプション）
} & MicroCMSContent; // 共通プロパティを結合

/**
 * microCMSのブログ記事リストAPIレスポンス全体の型定義
 */
export type BlogResponse = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};

// 💡 注意: categoryがオブジェクトの場合は、以下のように定義を修正してください。
/*
export type Category = {
  name: string;
} & MicroCMSContent;

export type Blog = {
  title: string;
  contents: string;
  category: Category[]; // カテゴリがリレーションフィールドの場合
} & MicroCMSContent;
*/