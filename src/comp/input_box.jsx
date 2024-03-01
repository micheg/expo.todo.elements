import md5 from "md5-hash";

import { View, Keyboard } from "react-native";
import { Input, Button } from "@rneui/themed";
import { useState } from "react";

export default function InputBox({ on_fire }) {
  const base_state = {
    title: "",
    desc: "",
    key: "",
  };

  const [data, set_data] = useState(base_state);

  return (
    <View style={{ padding: 10 }}>
      <Input
        placeholder="Add Title"
        value={data.title}
        onChangeText={(value) => {
          set_data((prev_state) => {
            return { title: value, desc: prev_state.desc, key: md5(value) };
          });
        }}
        enterKeyHint={"done"}
        onSubmitEditing={() => Keyboard.dismiss()}
      />
      <Input
        placeholder="Add Description"
        value={data.desc}
        onChangeText={(value) => {
          set_data((prev_state) => {
            return {
              title: prev_state.title,
              desc: value,
              key: prev_state.key,
            };
          });
        }}
        enterKeyHint={"done"}
        onSubmitEditing={() => Keyboard.dismiss()}
      />
      <Button
        title={"Add"}
        onPress={() => {
          Keyboard.dismiss();
          set_data(base_state);
          on_fire(data);
        }}
      />
    </View>
  );
}
