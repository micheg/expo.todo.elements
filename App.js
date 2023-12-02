import React from 'react';
import { useState, useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from './src/comp/header';
import InputBox from './src/comp/input_box';
import TodoItems from './src/comp/todo_items';

const STORAGE_HASH = '__todos__'

export default () =>
{
    const [todos, set_todos] = useState([]);
    const [ready, set_ready] = useState(false);

    const storeData = async (data) =>
    {
        try
        {
            const tmp = JSON.stringify(data);
            await AsyncStorage.setItem(STORAGE_HASH, tmp);
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
        AsyncStorage.getItem(STORAGE_HASH).then(data =>
        {
            if(data === null)
            {
                set_ready(true);
            }
            else
            {
                try
                {
                    set_todos(JSON.parse(data));
                }
                catch (e)
                {
                    console.log(e);
                }
                set_ready(true);
            }
        });
    }, []);

    useEffect(() =>
    {
        if(ready)
        {
            storeData(todos);
        }
    }, [todos, ready]);

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
};