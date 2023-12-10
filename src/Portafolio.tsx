import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface PortfolioProps {
  name: string;
  lastName: string;
  email: string;
  city: string;
  country: string;
  summary: string;
}

const Portfolio: React.FC<PortfolioProps> = ({
  name,
  lastName,
  email,
  city,
  country,
  summary,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Portafolio</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.info}>{name}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Lastname:</Text>
            <Text style={styles.info}>{lastName}</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.info}>{email}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>City:</Text>
            <Text style={styles.info}>{city}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Country:</Text>
            <Text style={styles.info}>{country}</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.label}>Summary:</Text>
            <Text style={styles.summary}>{summary}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000', // Fondo negro por defecto
    color: '#fff', // Letras blancas
  },
  headerContainer: {
    backgroundColor: '#000',
    paddingVertical: 30,
    alignItems: 'center',
  },
  header: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'sans-serif-light',
  },
  contentContainer: {
    padding: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  detailItem: {
    width: '48%',
    marginBottom: 10,
  },
  summaryItem: {
    width: '100%',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
    fontSize: 20,
  },
  info: {
    marginBottom: 10,
    color: '#fff',
    fontSize: 20,
  },
  summary: {
    textAlign: 'justify',
    color: '#fff',
    fontSize: 20,
  },
});

export default Portfolio;
