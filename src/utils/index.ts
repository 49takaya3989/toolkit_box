/**
 * isEmptyObject
 * 空オブジェクトかどうかの判定する関数
 * */
export const isEmptyObject = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
}

/**
 * str2Links
 * 文字列にURLパターンをリンクに変換する関数
 * */
export const str2Links = (str: string): string => {
  // URLを検出する正規表現パターン
  const urlPattern = /https?:\/\/[^\s<>"]+|www\.[^\s<>"]+/g;

  // URLにマッチする部分をリンクに置換
  return str.replace(urlPattern, (url) => `<a href="${url}">${url}</a>`);
}

/**
 * getObjKeys
 * オブジェクトのkeyを配列として取得する関数
 * */
export const getObjKeys = (obj: ObjType) => {
  return Object.keys(obj);
}
type ObjType = {
  [key: string]: unknown
}

/**
 * createObjectFromKeys
 * 文字列の配列から { K: "K" } のオブジェクトを作成する関数
 */
export const createObjectFromKeys = <Key extends string>(
  keys: readonly Key[]
): { [K in Key]: K } =>
  Object.fromEntries(keys.map((key) => [key, key] as const)) as { [K in Key]: K }
