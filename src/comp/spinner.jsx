import { View } from 'react-native';
import { Skeleton } from '@rneui/themed';

export default function Spinner()
{
    return (
        <View style={{ flex: 1 }}>
            <Skeleton width={120} height={40} />
        </View>
    )
}