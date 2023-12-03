import { Header, Icon } from "@rneui/base";
import { View, Alert } from 'react-native';
import { useState } from 'react';
import { Text } from '@rneui/themed';

function HDI(props)
{
    return (
        <Icon {...props} />
    )
}

export default function AppHeader()
{
    const [visible, set_visible] = useState(false);

    const __MSG__ = 'a small app written for an article about react native that tries to use many widgets from real apps.';

    const hndl_about_btn = () =>
    {
        Alert.alert('Todo APP', __MSG__,
        [
            {
                text: 'OK', onPress: () =>
                {
                    console.log('OK Pressed');
                }
            },
        ]);
    };

    const _style =
    {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 10
    }

    return (
        <>
            <Header
                backgroundImageStyle={{}}
                barStyle="default"
                centerComponent={{
                    text: "App Todo",
                    style: { color: "#fff" }
                }}
                centerContainerStyle={{}}
                containerStyle={{ width: '100%' }}
                leftContainerStyle={{}}
                linearGradientProps={{}}
                placement="center"
                rightComponent=<HDI
                    name={'menu'}
                    color={'#fff'}
                    onPress={e => set_visible(!visible)}
                />
                rightContainerStyle={{}}
                statusBarProps={{}}
            />
            {visible && <View style={_style}>
                <Text h4={true} onPress={hndl_about_btn}>About</Text>
                <Text h4={true}>Clear All</Text>
            </View>
            }
        </>
    );
}