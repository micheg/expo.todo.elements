// core libs
import { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// ui components
import Header from './comp/header';
import InputBox from './comp/input_box';
import TodoItems from './comp/todo_items';
import AppHeader from './comp/super_header';

export default function Main({ items, storage_hash })
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

    const hndl_item_add = (data) =>
    {
        const _text = data.title;
        if (_text.length <= 0) return -1;

        const tmp = todos.filter(i => i.key === data.key);
        if (tmp.length > 0)
        {
            Alert.alert('Todo APP', 'item already in list',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ]);
            return -1;
        }

        set_todos(prev_state =>
        {
            return ([{ checked: false, label: _text, desc: data.desc, key: data.key }, ...prev_state]);
        });
    };

    const hndl_item_del = (key) =>
    {
        Alert.alert('Todo APP', 'delete item?',
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK', onPress: () =>
                {
                    console.log('OK Pressed');
                    set_todos(todos.filter(i => i.key !== key));
                }
            },
        ]);
    };

    const hndl_item_chk = (key) =>
    {
        const tmp = [...todos];
        tmp.forEach(i =>
        {
            if (i.key === key)
            {
                i.checked = !i.checked;
            }
        });
        set_todos(tmp);
    };

    useEffect(() =>
    {
        store_data(todos);
    }, [todos]);

    return (
        <SafeAreaProvider>
            <AppHeader />
            <View style={{ flex: 1 }}>
                <Header />
                <InputBox
                    on_fire={(text) => { hndl_item_add(text) }}
                />
                <TodoItems
                    items={todos}
                    on_check={key => hndl_item_chk(key)}
                    on_delete={key => hndl_item_del(key)}
                />
            </View>
        </SafeAreaProvider>
    );
}