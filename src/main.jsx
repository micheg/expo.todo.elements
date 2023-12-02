import { View } from 'react-native';
import Header from './comp/header';
import InputBox from './comp/input_box';
import { useState, useEffect } from 'react';
import TodoItems from './comp/todo_items';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Main({items, storage_hash})
{
    const [todos, set_todos] = useState(items);

    const store_data = async (data) =>
    {
        try
        {
            const tmp = JSON.stringify(data);
            await AsyncStorage.setItem(storage_hash, tmp);
        }
        catch (e)
        {
            console.log(e);
        }
    };

    const hndl_item_add = (_text) =>
    {
        if (_text.length <= 0) return -1;
        set_todos(prev_state =>
        {
            return ([...prev_state, { checked: false, label: _text }]);
        });
    };

    const hndl_item_del = (idx) =>
    {
        const tmp = [...todos];
        tmp.splice(idx, 1);
        set_todos(tmp);
    };

    const hndl_item_chk = (idx) =>
    {
        const tmp = [...todos];
        tmp[idx].checked = !tmp[idx].checked;
        set_todos(tmp);
    };

    useEffect(() =>
    {
        store_data(todos);
    }, [todos]);

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <InputBox
                on_fire={(text) => {hndl_item_add(text)}}
            />
            <TodoItems
                items={todos}
                on_check={idx => hndl_item_chk(idx)}
                on_delete={idx => hndl_item_del(idx)}
            />
        </View>
    );
}