
import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import Movie from  '../components/Movie'

export default function App() {
  const movies = [
    {
      id: '1',
      title: 'Mussum, o Filmis',
      director: 'Silvio Guindade',
      origem: 'Brasil',
      image: 'https://tm.ibxk.com.br/2023/08/31/31100223471052.jpg', 
    },
    {
      id: '2',
      title: 'Forrest Gump',
      director: 'Robert Zemeckis',
      origem: 'USA',
      image: 'https://m.media-amazon.com/images/S/pv-target-images/2d0c9e38968936e6711c7fb2bc7895b82d8bb9178b5a854e14dffa4b17b88487.jpg',
    },
    {
      id: '3',
      title: 'Corra!',
      director: 'Jordan Peele',
      origem: 'EUA',
      image: 'https://br.web.img3.acsta.net/pictures/17/04/19/21/08/577190.jpg', 
    },
    {
      id: '4',
      title: 'Cidade de Deus',
      director: 'Brasikl',
      origem: 'Fernando meirles e Kátia Lund',
      image: 'https://www.estadao.com.br/resizer/v2/KKMCW4Z43ZPXJBBV7Y2K3IKWGQ.jpg?quality=80&auth=4932a259958e440277402ff4da4c27a24ea8514d55618a5790226e880423e596&width=1200&height=675&focal=0,0', 
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
