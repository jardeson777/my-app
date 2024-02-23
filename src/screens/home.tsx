import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { StackParamList } from "../../App";
import { Button } from "../components/button1";

type Props = NativeStackScreenProps<StackParamList, 'home'>;

const HomeScreen = ({ navigation }: Props) => {
    return (
        <View className="flex justify-center items-center flex-1 bg-white">
            <Text>Home</Text>
            <Button color="primary" variant="solid" onPress={() => navigation.goBack()}>
                <Text>Go to login</Text>
            </Button>
        </View>
    );
}

export default HomeScreen;