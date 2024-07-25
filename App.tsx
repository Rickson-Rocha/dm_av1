
import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import Movie from  './components/Movie'

export default function App() {
  const movies = [
    {
      id: '1',
      title: 'O Poderoso Chefão',
      director: 'Francis Ford Coppola',
      origem: 'USA',
      image: 'https://example.com/godfather.jpg', 
    },
    {
      id: '2',
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      origem: 'USA',
      image: '',
    },
    {
      id: '3',
      title: 'Cidade de Deus',
      director: 'Fernando Meirelles',
      origem: 'Brasil',
      image: '', 
    },
    {
      id: '4',
      title: 'Parasita',
      director: 'Bong Joon-ho',
      origem: 'Coreia do Sul',
      image: '', 
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => <Movie movie={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
});
