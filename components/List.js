import React from 'react';
import { FlatList, View } from 'react-native';

import Footer from './Footer';
import Item from './Item';
import TopBar from '../utils/TopBar';

class List extends React.Component {
  renderItem = ({ item }) => <Item {...item} />;
  keyExtractor = item => item.key;
  render() {
    const { onPressFooter, ...props } = this.props;
    return (
      <View>
      <TopBar text="Submitted issues" imageUrl={require("../assets/icons/placeholder.png")} 
        style={{borderRadius: 20, 
                borderColor: "black", 
                // marginBottom: 10, 
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.44,
                shadowRadius: 10.32,} }/>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={this.keyExtractor}
          ListFooterComponent={footerProps => (
          <Footer {...footerProps} onPress={onPressFooter} />
          )}
          renderItem={this.renderItem}
          {...props}
        />
      </View>
    );
  }
}
export default List;
