import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Cachorro from '../components/Cachorro';

const PaginaCachorro = () => {
    // Dados fictícios de exemplo de um cachorro
    const CachorroData = {
        name: 'Rex',
        breed: 'Labrador',
        imageUrl: 'https://www.example.com/your-dog-image.jpg',
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Cachorro
                name={cahorroData.nome}
                breed={cachorroData.raca}
                imageUrl={cachorroData.imageUrl}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        paddingVertical: 20,
    },
});

export default PaginaCachorro;