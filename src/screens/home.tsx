import { Text, View } from "react-native";
import { Button } from "../components/button1";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabParamList } from "../../App";

type Props = BottomTabScreenProps<TabParamList, 'home'>;

const HomeScreen = ({ navigation }: Props) => {
    const { canGoBack } = navigation;

    return (
        <View className="flex justify-center items-center flex-1 bg-white">
            <Text>Home</Text>

            {canGoBack() ? (
                <Button color="primary" variant="solid" onPress={() => navigation.goBack()}>
                    <Text>Go to login</Text>
                </Button>
            ) : null}
        </View>
    );
}

export default HomeScreen;