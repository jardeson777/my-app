import { Image, ScrollView, Text, TextInput, View } from "react-native";
import Logo from "../assets/logo.png";
import { Button } from "../components/button1";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../App";

type Props = NativeStackScreenProps<StackParamList, 'login'>;

const LoginScreen = ({ navigation }: any) => {
    return (
        <ScrollView className='p-6 w-full h-full bg-white'>
            <View className="flex items-center justify-center">
                <Image source={Logo} className='w-32 h-36 mx-auto' />
            </View>

            <Text className='text-3xl font-semibold mt-14'>Bem-vindo de volta</Text>

            <View className='mt-14 flex space-y-10'>
                <View>
                    <Text className='text-base'>Email</Text>
                    <TextInput
                        className='border h-12 w-full rounded-full px-7'
                        placeholder='Digite um email'
                    />
                </View>

                <View>
                    <Text className='text-base'>Senha</Text>
                    <TextInput
                        className='border h-12 w-full rounded-full px-7'
                        placeholder='*******'
                        secureTextEntry
                    />
                </View>
            </View>

            <Button variant='solid' color='primary' onPress={() => navigation.push("home")}>
                <Text className='text-white font-medium text-base'>logar</Text>
            </Button>

            <Button variant='ghost' color='secondary'>
                <Text className='font-medium text-base text-blue-600'>Cadastrar</Text>
            </Button>
        </ScrollView>
    );
}

export default LoginScreen;