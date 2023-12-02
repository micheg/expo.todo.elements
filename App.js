import React from 'react';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Spinner from './src/comp/spinner';
import Main from './src/main';

const STORAGE_HASH = '__todos__'

export default () =>
{
    const [items, set_items] = useState(null);

    useEffect(() =>
    {
        AsyncStorage.getItem(STORAGE_HASH).then(data =>
        {
            try
            {
                set_items(data === null ? [] : JSON.parse(data));
            }
            catch (e)
            {
                console.error(e);
                set_items([]);
            }
        });
    }, []);

    if (items === null) return (<Spinner />);

    return (
        <Main
            storage_hash={STORAGE_HASH}
            items={items}
        />
    );
};