import { View } from 'react-native';

import TodoItem from "./todo_item";

export default function TodoItems({items, on_check, on_delete})
{
    return (
        <View>
        {
            items.map((l, i) => (
                <TodoItem
                    key={i}
                    item={l}
                    idx={i}
                    on_check={on_check}
                    on_delete={on_delete}
                />
            ))
        }
        </View>
    );
}