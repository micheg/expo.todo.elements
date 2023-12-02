import { ListItem } from '@rneui/themed';

export default function TodoItem({item, idx, on_check, on_delete})
{
    return (
        <ListItem bottomDivider>
            <ListItem.CheckBox
                checked={item.checked}
                onPress={ () => on_check(idx) }
            />
            <ListItem.Content>
                <ListItem.Title>{item.label}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron
                name="trash-can-outline"
                type="material-community"
                color="grey"
                onPress={ () => on_delete(idx) }
            />
        </ListItem>
    );
}