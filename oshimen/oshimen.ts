export interface Oshimen {
  /**
   * アイドルの一意なID
   */
  id: string
  /**
   * アイドルの名前
   */
  name: string
  /**
   * アイドルの絵文字。アイドルの名前の先頭に表示される。
   */
  emoji: string
  /**
   * アイドルの誕生日。誕生日特殊処理に必要なので必ず正確な誕生日を入れること。
   */
  birthday: {
    month: number
    day: number
  }
  /**
   * 短い愛文
   */
  shortDescription: string
  /**
   * 詳細な愛文
   */
  description: string
  /**
   * 表示させるツイートID
   */
  tweetId: string
  /**
   * 種別
   */
  type: 'idol' | 'vtuber' | 'bassist' | 'voice_actor'
}
