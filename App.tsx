import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native';
import CoinItem from './components/CoinItem';
import SearchInput from './components/SearchInput';
import { ICoin } from './types/Coin';

const App = () => {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [value, onChangeValue] = useState<String>('');
  const loadData = async () => {
    const resp: Promise<Response> = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    );
    const data: ICoin[] = await resp.json();
    setCoins(data);
  };

  const filterCoins = () => {
    const searchResults = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(value.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(value.toLowerCase())
    );
    return searchResults;
  };
  useEffect(async () => {
    console.log('loaded');
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style={styles.statusBar} />
      <View>
        <Text style={styles.title}>Koin Visualizer</Text>
        <SearchInput value={value} onChange={onChangeValue} />
      </View>
      <FlatList
        data={filterCoins(coins)}
        renderItem={({ item }) => {
          return <CoinItem coin={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    flex: 1,
  },
  title: {
    marginTop: 10,
    fontSize: 25,
    color: '#ffffff',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  statusBar: {
    backgroundColor: '#141414',
  },
});

export default App;
