import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Card, Text } from 'react-native-paper';

interface MovieProps {
  movie: {
    image: string;
    title: string;
    director: string;
    origem: string;
  };
}

export default function Movie({ movie }: MovieProps) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Image source={{ uri: movie.image }} style={styles.image} />
        <Text>{movie.title}</Text>
        <Text>{movie.director}</Text>
        <Text>{movie.origem}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});