UTILS = {};

UTILS.clear_storage = async () =>
{
    try
    {
        await AsyncStorage.clear()
    } catch (e)
    {
    }
    console.log('Done.')
};

export default UTILS;