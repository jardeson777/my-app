import { Text, View } from "react-native";
import { TabParamList } from "../../App";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type Props = BottomTabScreenProps<TabParamList, 'notifications'>;

const NotificationsScreen = ({ navigation }: Props) => {
    return (
        <View className="flex justify-center items-center flex-1 bg-white">
            <Text>Notification</Text>
        </View>
    );
}

export default NotificationsScreen;