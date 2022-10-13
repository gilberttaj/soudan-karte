import { View, Text, ScrollView } from 'react-native'
import React from 'react'


const FAQ = () => {
  return (
    <ScrollView>
      <View className='mt-12'>
        <Text className='pl-4 text-xl'>アプリについて</Text>
      </View>
      <View className='mt-4'>
        <Text className='text-sm pl-4'>Q.相談カルテとは？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.専門家とアプリで簡単に連絡を取り合うことができるアプリです。ユーザーのお悩みやトラブルの解決をお手伝いするためのアプリです。</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4'>Q.相談は無料ですか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.専門家によりますので詳しくは専門家にお問合せください。</Text>
      </View>
      <View className='mt-7'>
        <Text className='text-sm pl-4'>Q.どのような料金がかかるのですか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.相談料や着手金、成功報酬金などが発生します。担当の専門家とユーザーとの個別契約となりますので、詳しくは各専門家にご確認ください。</Text>
      </View>
      <View className='mt-8'>
        <Text className='text-sm pl-4'>Q.誰でも相談できますか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.はい。ユーザー登録いただくことで、どなたでも相談が可能です。会員登録にはお名前（姓・名）、メールアドレス、パスワードの設定が必要です。</Text>
      </View>
      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.匿名でも相談できますか？なぜユーザー登録が必要なのですか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.トラブル相手方の相談を受任している場合等、あなたの相談に乗ることができないケースがありますので、これを避けるため、実名での事前のユーザー登録をお願いしています。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.相談カルテに登録している人ってどんな人？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.相談カルテを運営している日本法規情報株式会社では、登録しているすべての専門家と実際にスタッフが面談し、審査・承認をしてアカウントを発行しております。</Text>
      </View>

      
      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.どの専門家を選んだらいいかわかりません</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.相談サポートセンターにご連絡いただくと最適な専門家を探すお手伝いをさせていただきます。また、専門家IDを入力せずに相談カルテを作成し登録すると、カルテの内容は、登録されている専門家に閲覧可能となり、対応ができると思う専門家の方から返信があります。まずはお話をされてみて、ご自身にあった専門家を見つけてください。※必ず返信があるとは限りません。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.専門家を選んで相談することはできますか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.相談カルテを登録する際に専門家IDを入力できますので、専門家IDを入力することで指定した専門家と相談することができます。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.1つの相談で相談できる専門家数は制限はありますか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.1つ相談に対し、対応できる専門家は3名までとなっております。なお、各々のチャット内容は他の専門家からは見えません。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.専門家からの返信の閲覧方法がわかりません</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.「専門家連絡」をタップすると返信内容を確認することができます。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.投稿した相談カルテを確認できますか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.「マイページ」タブに送信した相談カルテが表示されますので、タップすると送信内容を確認することができます。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.質問の編集・削除はできますか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.登録した相談カルテは編集・削除できません。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.電話相談をすることはできますか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.はい。専門家連絡の画面や専門家プロフィール画面に「電話する」ボタンがありますので、直接お電話で相談することができます。お電話される際は、「相談カルテのスマホアプリを見て電話した」旨をお伝えください。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.入会コード（相談ID/専門家ID)とは何ですか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.相談IDは相談カルテが提携している企業の会員様向けのIDとなります。また、専門家IDは専門家から教えていたもらった専門家を特定するIDです。入会コードをお持ちの方は、無料ですべての機能を利用することができます。お持ちでない場合は空欄のまま登録してください。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.相談カルテを送信しても返信がありません</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.専門家からの回答を保証しておりません。以下のような状況で返信が来ない場合もあります。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.相談カルテを送信しても返信がありません</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.専門家からの回答を保証しておりません。以下のような状況で返信が来ない場合もあります。</Text>
      </View>

      <View className='mt-5'>
        <Text className='text-sm pl-5 pr-4 leading-6'>• 専門家が多忙なため、回答する時間がない場合</Text>
        <Text className='text-sm pl-5 pr-4 leading-6'>• 投稿された相談は専門家が回答できる相談ではない場合</Text>
        <Text className='text-sm pl-5 pr-4 leading-6'>• ご相談の趣旨が不明確で回答が困難な場合</Text>
        <Text className='text-sm pl-5 pr-4 leading-6'>• 一般的な制度に関するご質問</Text>
      </View>

      <View className='mt-5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>ご相談を投稿する際は下記ポイントにご配慮いただくと、より具体的な回答が期待できます。
        </Text>
      </View>

      <View className='mt-6'>
        <Text className='text-sm pl-5 pr-4 leading-6'>• いつ、誰が、誰に、何をしたか（されたか）をわかりやすくご記載ください。</Text>
        <Text className='text-sm pl-5 pr-4 leading-6'>• 質問内容やご相談者様がお望みの事（どうしたいのか）をご記載ください。</Text>
      </View>

      <View className='mt-6'>
        <Text className='text-sm pl-4 pr-4 leading-6'>またお急ぎの場合はプロフィール画面の「電話する」ボタンからお電話にてご相談されることもご検討ください。
        </Text>
      </View>

      <View className='mt-8'>
        <Text className='pl-4 text-xl'>{'<'}クレジットカード決済機能について{'>'}</Text>
      </View>

      <View className='mt-5'>
        <Text className='text-sm pl-4 pr-4'>Q.クレジットカード機能とは何ですか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.専門家との相談費用を当アプリの中だけで簡単にお支払いできる機能です。お支払いにはクレジットカードが必要です。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.いつの間にか勝手に請求が来ませんか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.その心配はありません。専門家との合意がない場合はお支払い頂かなくても構いません。その旨を相談中の専門家へお伝え下さい。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.どのように支払うのですか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.専門家とお支払いに合意した場合は「ご請求がありました」とチャット内に表示されます。費目と金額をよくご確認頂き、間違いなければ「支払う」を押しクレジットカード情報をご入力下さい。２回目以降は入力を省くこともできます。その場でお支払いが完了します。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.使えるクレジットカードの種類は何ですか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.VISA、MasterCard、JCB、American Express、Diners、Discoverの各カードがご利用になれます（専門家によっては一部ご利用になれない場合があります）。なお、JCB、American Express、Discoverについてはお支払い上限が50万円までとなります。JCB、American Express、Diners、Discoverは１回払いのみ、VISA、MasterCardは分割やリボ払いもお選び頂けます。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.領収証や控えは発行されますか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.お支払い先の専門家までお問合せください。
        </Text>
      </View>

      <View className='mt-8'>
        <Text className='pl-4 text-xl'>{'<'}相談について{'>'}</Text>
      </View>

      <View className='mt-5'>
        <Text className='text-sm pl-4 pr-4'>Q.相談できる内容は？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.様々なご相談が対応可能です。お気軽にご相談ください。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.問題が起こる前の相談は可能ですか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.問題ありません。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.自分の相談内容がどのカテゴリに入るかわかりません</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.ご相談内容のカテゴリがご不明の場合は「その他相談」カテゴリをご選択ください。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.相談前に準備することはありますか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.相談したい事象に関係する人物、時刻や金額など具体的内容を把握しておくと話をスムーズに進めることができます。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.返信はどのくらいで来ますか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.専門家によります。専門家が決まっている場合は電話等をしてみても良いでしょう。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.相談は外部に漏れないですか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.はい、外部に漏れることはありません。各専門家はご相談者に対して守秘義務を負っています。どのような相談内容であっても、これらを外部に漏らすことは絶対にありません。ご安心ください。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.専門家に具体的に依頼したい時はどうすれば良いですか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.専門家連絡機能にて、具体的に案件を依頼したい時には専門家にその旨を伝え、後は個別に日程等を調整の上でご依頼下さい。</Text>
      </View>

      <View className='mt-8'>
        <Text className='pl-4 text-xl'>{'<'}登録情報について{'>'}</Text>
      </View>

      <View className='mt-5'>
        <Text className='text-sm pl-4 pr-4'>Q.パスワードを忘れました</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.ログアウトした状態で「マイページ」＞画面右上にある「設定アイコン」＞「ログイン」の順に進み、「パスワードを忘れた方はこちら」をタップして登録しているメールアドレスをご入力ください。ご指定のメールアドレスにパスワードリセット用のメールが届きますので、再設定をお願いします。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.登録しているメールアドレスを確認するには？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.ログインした状態で「マイページ」＞画面右上にある「設定アイコン」＞「メールアドレス変更」をタップし、登録しているメールアドレスを確認することができます。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.登録しているクレジットカード情報を確認するには？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.ログインした状態で「マイページ」＞画面右上にある「設定アイコン」＞「お支払情報」をタップし、登録しているクレジットカードを確認することができます。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.登録情報を変更したい</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.ログインした状態で「マイページ」＞画面右上にある「設定アイコン」をタップし、以下のメニューから各項目の変更が可能です。</Text>
      </View>

      <View className='mt-5'>
        <Text className='text-sm pl-5 pr-4 leading-6'>• 「プロフィール設定」より、お名前(姓・名)の変更とプロフィール画像の変更</Text>
        <Text className='text-sm pl-5 pr-4 leading-6'>• 「メールアドレス変更」より、メールアドレスの変更</Text>
        <Text className='text-sm pl-5 pr-4 leading-6'>• 「パスワード変更」より、パスワードの変更</Text>
        <Text className='text-sm pl-5 pr-4 leading-6'>• 「お支払情報」より、クレジットカードの変更</Text>
      </View>

      <View className='mt-5'>
        <Text className='text-sm pl-4 pr-4'>Q.機種変更をする時の注意</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.アプリをお使いの機種で登録いただいたIDとパスワードでログインしていただくことで、変更後の機種でも継続してお使いいただけます。機種変更の際にはIDとパスワードをご確認ください。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.退会したい</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.ログインした状態で「マイページ」＞画面右上にある「設定アイコン」をタップし、メニューの一番下に表示される「退会」を選択して退会処理を行ってください。なお、退会してしまうとこれまでの相談履歴は消去されますのでご注意ください。クレジットカード情報をご登録頂いていた場合はこちらも消去されます。</Text>
      </View>

      <View className='mt-8'>
        <Text className='pl-4 text-xl'>{'<'}セキュリティについて{'>'}</Text>
      </View>

      <View className='mt-5'>
        <Text className='text-sm pl-4 pr-4'>Q.セキュリティは安心ですか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.相談カルテでは、個人情報や相談履歴の情報を、大企業も採用しているAWS(Amazon Web Services)のデータセンターで管理しており、高度なセキュリティと高い信頼性によって保護されています。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.通信は暗号化されていますか？</Text>
      </View>
      <View className='mt-1.5'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.はい。インターネット上の通信を暗号化する技術であるSSL(Secure Socket Layer)によってアプリの通信は暗号化されていますので、第三者が内容を確認することはできません。</Text>
      </View>

      <View className='mt-8'>
        <Text className='text-sm pl-4 pr-4'>Q.クレジットカード情報は安心ですか？</Text>
      </View>
      <View className='mt-1.5 mb-14'>
        <Text className='text-sm pl-4 pr-4 leading-6'>A.はい。弊社はクレジットカード決済をソニーペイメントサービス株式会社を通じて提供しており、弊社やアプリ本体にはクレジットカード情報は保存されていません。またソニーペイメントサービス社の決済サーバーは国際カード情報セキュリティ統一基準「PCI-DSS」に準拠しています。</Text>
      </View>









    </ScrollView>
  )
}

export default FAQ