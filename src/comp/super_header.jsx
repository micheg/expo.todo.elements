import { Header, Icon } from "@rneui/base";
import { View, Alert } from 'react-native';
import { useState } from 'react';
import { Text } from '@rneui/themed';

// storage
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            }
        ]);
    };

    const hndl_clear_all = () =>
    {
        Alert.alert('Todo APP', 'do you want to delete all data?',
        [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'OK', onPress: () =>
                {
                    AsyncStorage.clear().then(() =>
                    {
                        Alert.alert('Todo APP', 'data erased',
                        [
                            {
                                text: 'Cancel',
                                style: 'cancel',
                            }
                        ]);
                    });
                }
            }
        ]);
    };

    const _style =
    {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 10,
        backgroundColor: '#6495ed',
    };

    return (
        <>
            <Header
                backgroundImageStyle={{}}
                barStyle="default"
                centerComponent={{
                    text: "App Todo",
                    style: { color: "#fff" }
                }}
                backgroundColor={'#6495ed'}
                centerContainerStyle={{}}
                containerStyle={{ width: '100%' }}
                leftContainerStyle={{}}
                linearGradientProps={{}}
                placement="center"
                rightComponent={
                <HDI
                    name={'menu'}
                    color={'#fff'}
                    onPress={e => set_visible(!visible)}
                />}
                rightContainerStyle={{}}
                statusBarProps={{}}
            />
            {visible && <View style={_style}>
                <Text
                    h4={true}
                    style={{color: '#fff'}}
                    onPress={hndl_about_btn}
                >
                    About
                </Text>
                <Text
                    h4={true}
                    style={{color: '#fff'}}
                    onPress={hndl_clear_all}
                >
                    Clear All
                </Text>
            </View>
            }
        </>
    );
}