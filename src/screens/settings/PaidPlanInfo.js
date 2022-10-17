import { View, Text } from 'react-native'
import React from 'react'

const PaidPlanInfo = () => {
  return (
    <View className="mt-10 px-6">
      <View className="my-4">
        <Text className="text-xl font-medium">サービス内容</Text>
      </View>
      <View className="my-4">
        <Text className="text-sm">有料プランに登録いただくと、チャットのメッセージを 送受信できる回数が無制限になります。</Text>
      </View>
      <View className="my-4">
        <Text className="text-sm">※有料プランのご利用料金は、相談カルテデータや、メ ッセージデータの保管料にあてられます</Text>
      </View>
      <View className="my-4 font-medium">
        <Text className="text-xl font-medium">支払い方法や解約について</Text>
      </View>
      <View className="my-2">
        <Text>・購入日より1ヶ月間有効です。</Text>
      </View>
      <View className="my-2">
        <Text>・購入後のお支払いはGoogleアカウントに請求されま</Text>
      </View>
       <View className="my-2">
        <Text>・お客様にて解約手続きしない限り自動的に継続購読になります。</Text>
      </View>
       <View className="my-2">
        <Text>・GooglePlayにて定められている期日前に解約をする事で次回自動継続を停止できます。</Text>
      </View>
      <View className="my-2">
        <Text>・アプリから解約を行うことはできません。解約を行う場合はGooglePlayから行ってください。</Text>
      </View>
      <View className="my-2">
        <Text>・アプリを削除しても解約はできません。</Text>
      </View>
    </View>
  )
}

export default PaidPlanInfo