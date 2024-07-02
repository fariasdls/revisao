import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Cachorro = ({ nome, raca, imageUrl }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.text}>Nome: {nome}</Text>
            <Text style={styles.text}>Raca: {raca}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        marginBottom: 5,
    },
});

export default Cachorro;