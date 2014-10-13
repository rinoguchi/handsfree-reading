## Macの音声認識、テキスト読み上げを使う
* 設定
  * システム環境設定 > 音声入力と読み上げ > 音声入力 > 音声入力を"入"に > "拡張音声入力を使用"にチェック
  * システム環境設定 > 音声入力と読み上げ > テキスト読み上げ > システムの声 > カスタマイズ > "Kyoko" or "Otoya"を選択
* 音声認識
  * jamesを使う
    * https://github.com/floere/james
    * MarvericksでMacrubyのMacGemが動かない問題で挫折
      * https://github.com/MacRuby/MacRuby/issues/219
* テキスト読み上げ
  * `say "abcde"` 

## Google Speech Apiで音声認識する場合
* 設定
  * server key取得（以下を参考に）
    * https://github.com/zaf/asterisk-speech-recog/issues/9#issuecomment-44494639 
  * `brew install ffmpeg`
  * `brew install sox`
* 音声認識
  * sample参照 

## Web Speech API
* 設定
  * マイクの許可
    * Chrome メニュー > 設定 > 詳細設定を表示 > プライバシー > コンテンツの設定 > メディア > 例外の管理 > 訪問済みのWebサイトを選択し、常に許可 
* 仕様
  * https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html
* 参考サイト
  * http://www.yoheim.net/blog.php?q=20140701 

