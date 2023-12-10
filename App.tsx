// Importa las bibliotecas necesarias
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Portfolio from './src/Portafolio';

const App: React.FC = () => {
  return (
    <View style={styles.appContainer}>
      <Portfolio
        name="Victor"
        lastName="Araya"
        email="victor.araya@alumnos.ucn.cl"
        city="Antofagasta"
        country="Chile"
        summary="Desarrollador de software con experiencia en react native"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#000', // Fondo negro por defecto
  },
});

export default App;
