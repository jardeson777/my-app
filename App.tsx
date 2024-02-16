import { Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from "./src/assets/logo.png";

export default function App() {
  return (
    <ScrollView className='p-6 w-full h-full'>
      <View className="flex items-center justify-center">
        <Image source={Logo} className='w-32 h-36 mx-auto' />
      </View>

      <Text className='text-3xl font-semibold mt-14'>Bem-vindo de volta</Text>

      <View className='mt-14 flex space-y-10'>
        <View>
          <Text className='text-base'>Email</Text>
          <TextInput className='border h-12 w-full rounded-full px-7' placeholder='Digite um email' />
        </View>

        <View>
          <Text className='text-base'>Senha</Text>
          <TextInput className='border h-12 w-full rounded-full px-7' placeholder='*******' secureTextEntry />
        </View>
      </View>

      <TouchableOpacity className='w-44 h-12 bg-[#3A2F2E] rounded-full flex justify-center items-center ml-auto mt-24'>
        <Text className='text-white font-medium text-base'>Entrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
