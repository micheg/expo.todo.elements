import { View } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { useState } from 'react';

export default function InputBox({ on_fire })
{
    const [text, set_text] = useState('');

    return (
        <View>
            <Input
                placeholder='Add Description'
                value={text}
                onChangeText={value => set_text(value)}
            />
            <Button
                title={'Add'}
                onPress={() =>
                {
                    set_text('');
                    on_fire(text);
                }}
            />
        </View>
    );
}