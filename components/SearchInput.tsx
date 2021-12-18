import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const SearchInput = ({
  value,
  onChange,
}: {
  value: String;
  onChnage: () => void;
}) => {
  return (
    <View>
      <View style={styles.searchCointainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={onChange}
          value={value}
          placeholder='Search a Coin'
          placeholderTextColor='#858585'
        />
        <Button color={'#ffffff0'} title='&#x1F50D;' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchCointainer: {
    flexDirection: 'row',
    width: '100%',
  },
  text: {
    color: '#ffffff',
    fontSize: 12,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  searchInput: {
    width: '90%',
    height: 30,
    color: '#ffffff',
    borderBottomColor: '#afacac',
    borderBottomWidth: 3,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 20,
  },
});

export default SearchInput;
