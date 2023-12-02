import { Text } from '@rneui/themed'
import { StatusBar } from 'react-native';

export default function Header()
{
    return (
        <>
            <StatusBar barStyle='default'></StatusBar>
            <Text h2={true}>TODO List</Text>
        </>
    );
}