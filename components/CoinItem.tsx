import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ICoin } from '../types/Coin';

const CoinItem = ({ coin }: { coin: ICoin }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.name}>
        <Image style={styles.image} source={{ uri: coin.image }} />
        <Text style={styles.text}>{coin.name}</Text>
        <Text style={styles.textSymbol}>{coin.symbol}</Text>
      </View>
      <Text style={styles.text}>{`$${coin.current_price}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: '#333333',
    marginTop: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
  },
  text: {
    color: '#000000',
    zIndex: 1,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSymbol: {
    color: '#88888861',
    marginRight: 10,
    fontSize: 35,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    position: 'absolute',
    left: 150,
  },
});

export default CoinItem;
