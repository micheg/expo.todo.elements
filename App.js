import React from 'react';
import { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { Input, Button, Text, ListItem, Icon } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_HASH = '__todos__'

export default () =>
{
    const [todos, set_todos] = useState([]);
    const [text, set_text] = useState('');
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

    const handle_btn_press = () =>
    {
        if (text.length <= 0) return -1;
        set_todos(prev_state =>
        {
            return ([...prev_state, { checked: false, label: text }]);
        });
        set_text('');
    };

    const handle_item_remove = (idx) =>
    {
        const tmp = [...todos];
        tmp.splice(idx, 1);
        set_todos(tmp);
    };

    const handle_item_check = (idx) =>
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
            <StatusBar barStyle='default'></StatusBar>
            <Text h2={true}>TODO List</Text>
            <View>
                <Input
                    placeholder='Add Description'
                    value={text}
                    onChangeText={value => set_text(value)}
                />
                <Button
                    title={'Add'}
                    onPress={handle_btn_press}
                />
            </View>
            <View>
                {
                    todos.map((l, i) => (
                        <ListItem key={i} bottomDivider>
                            <ListItem.CheckBox
                                checked={l.checked}
                                onPress={() =>
                                {
                                    handle_item_check(i);
                                }}
                            />
                            <ListItem.Content>
                                <ListItem.Title>{l.label}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron
                                name="trash-can-outline" type="material-community" color="grey"
                                onPress={() => handle_item_remove(i)}
                            />
                        </ListItem>
                    ))
                }
            </View>
        </View>
    );
};