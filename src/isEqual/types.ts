import { NormalizeOptions } from '../normalize';

/**
 * オプション
 */
export type IsEqualOptions = NormalizeOptions & {
  /**
   * 値1の正規化を行わない
   */
  noNormalizationForValue1?: boolean;

  /**
   * 値2の正規化を行わない
   */
  noNormalizationForValue2?: boolean;
};
