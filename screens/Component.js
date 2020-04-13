import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ComponentScreen = () => {

    const name = 'Injilio';
    const showMe = <Text> Selamat Datang Di Appku</Text>;

    return (
        <View>
            <Image
                style={{width: 200, height: 200}}
                source={{uri: 'https://4.bp.blogspot.com/-HZGae2MB3MY/UzJOsBsOVdI/AAAAAAAAQgM/GpWTMBBQdKQ/s1600/LOGO+UNIVERSITAS+KLABAT.png'}}
            />
            <Text style={{ fontSize: 30, color: 'blue' }}> 
                This is Component Screen
            </Text>
            <Text style={styles.textSytle}>
               Hello {name}
            </Text>
            {showMe}
        </View>
    );
};

const styles = StyleSheet.create({
    textSytle: {
        fontSize: 30,
        color: 'blue'
    }
});

export default ComponentScreen;

