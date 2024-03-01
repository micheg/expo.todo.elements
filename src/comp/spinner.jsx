import { View, Text } from "react-native";
import { Skeleton } from "@rneui/themed";

export default function Spinner() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Skeleton circle width={80} height={80} animation={"pulse"} />
      <Text>Loading data...</Text>
    </View>
  );
}
