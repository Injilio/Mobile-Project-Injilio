import React from 'react';
import { Text, View, Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title="Gerbang"
                imageSource={require('../assets/gerbang.jpg')}
                rating="5"
            />
            <ImageDetail 
                title="GK"
                imageSource={require('../assets/gk.jpg')}
                rating="4"
            />
            <ImageDetail 
                title="Gereja"
                imageSource={require('../assets/gereja.jpg')}
                rating="3"
            />
        </View>
    )
};

export default ImageScreen;