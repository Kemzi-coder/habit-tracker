import {useNavigation} from "@react-navigation/native";
import {AppNavigationProp} from "types/navigation";

const useTypedNavigation = () => useNavigation<AppNavigationProp>();

export default useTypedNavigation;
