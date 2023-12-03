import { ListItem, Icon, Button } from '@rneui/themed';

export default function TodoItem({ item, idx, on_check, on_delete })
{
    return (
        <ListItem.Swipeable bottomDivider
            leftWidth={80}
            rightWidth={90}
            minSlideWidth={40}
            rightContent={(action) => (
                <Button
                    containerStyle={{
                        flex: 1,
                        justifyContent: "center",
                        backgroundColor: "#f52c2c",
                    }}
                    type="clear"
                    icon={{
                        name: "archive-outline",
                        type: "material-community"
                    }}
                    onPress={()=>
                    {
                        action();
                        on_delete(item.key);
                    }}
                />
            )}
        >
            <ListItem.CheckBox
                checked={item.checked}
                onPress={() => on_check(item.key)}
            />
            <ListItem.Content>
                <ListItem.Title>{item.label}</ListItem.Title>
                <ListItem.Subtitle>{item.desc}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon name="arrow-back" type="material" />
        </ListItem.Swipeable>
    );
}