import normalize from '../normalize';
import { IsEqualOptions } from './types';

/**
 * 2つの文字列が同等であることを判定する
 * @param value1 文字列1
 * @param value2 文字列2
 * @param options オプション
 * @returns
 */
export default function isEqual(
  value1: string,
  value2: string,
  options: IsEqualOptions = {},
): boolean {
  const {
    noNormalizationForValue1: noStandardizationForValue1,
    noNormalizationForValue2: noStandardizationForValue2,
    ...rest
  } = options;
  let targetValue1 = value1;
  let targetValue2 = value2;

  if (noStandardizationForValue1) {
    // 値1を正規化
    targetValue1 = normalize(value1, rest);
  }
  if (noStandardizationForValue1) {
    // 値2を正規化
    targetValue2 = normalize(value2, rest);
  }

  // 比較
  return targetValue1 === targetValue2;
}
