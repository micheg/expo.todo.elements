import { ScrollView } from 'react-native';

import TodoItem from "./todo_item";

export default function TodoItems({items, on_check, on_delete})
{
    return (
        <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
        {
            items.map((item, idx) => (
                <TodoItem
                    key={item.key}
                    item={item}
                    idx={idx}
                    on_check={on_check}
                    on_delete={on_delete}
                />
            ))
        }
        </ScrollView>
    );
}