import React from 'react';
import { Text, StyleSheet, FlatList, View} from 'react-native';

const friends = [
    {name: 'Teman #1', alamat: 'Unklab'},
    {name: 'Teman #2', alamat: 'Unklab'},
    {name: 'Teman #3', alamat: 'Unklab'},
    {name: 'Teman #4', alamat: 'Unklab'},
    {name: 'Teman #5', alamat: 'Unklab'},
    {name: 'Teman #6', alamat: 'Unklab'},
    {name: 'Teman #7', alamat: 'Unklab'},
    {name: 'Teman #8', alamat: 'Unklab'},
    {name: 'Teman #9', alamat: 'Unklab'}
]

const FriendScreen = () => {
    return (
        <FlatList 
            data={friends}
            renderItem={({ item }) => 
                <View style={styles.textStyle}>
                    <Text >
                        {item.name}
                    </Text>
                    <Text>
                        {item.alamat}
                    </Text>
                </View>
            }
            keyExtractor={item => item.name}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 80
    }
});

export default FriendScreen;