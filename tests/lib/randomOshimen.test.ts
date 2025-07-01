import { describe, it, expect } from 'vitest'
import { selectOshimenByWeight } from '@/lib/randomOshimen'
import { oshimens } from '@/oshimen/oshimens'

describe('selectOshimenByWeight', () => {
  it('異なるシード値で呼び出すと異なる推しメンが選ばれることを確認', () => {
    const selectedOshimens = new Set()
    const testCount = 100

    // 100回異なるシード値でテスト
    for (let i = 0; i < testCount; i++) {
      const selectedOshimen = selectOshimenByWeight(i)
      selectedOshimens.add(selectedOshimen.id)
    }

    // 全て同じ推しメンが選ばれた場合はテスト失敗
    expect(selectedOshimens.size).toBeGreaterThan(1)
  })

  it('有効な推しメンが返されることを確認', () => {
    const selectedOshimen = selectOshimenByWeight(42)
    const oshimenIds = oshimens.map((o) => o.id)

    expect(oshimenIds).toContain(selectedOshimen.id)
  })

  it('同じシード値では同じ推しメンが返されることを確認', () => {
    const seed = 123
    const result1 = selectOshimenByWeight(seed)
    const result2 = selectOshimenByWeight(seed)

    expect(result1.id).toBe(result2.id)
  })
})
