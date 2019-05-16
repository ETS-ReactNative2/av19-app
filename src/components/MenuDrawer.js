import React from 'react';
import { Image } from 'react-native';
import {
  List, ListItem, Container, Header, Content, Icon
} from 'native-base';
import { withNavigation } from 'react-navigation';
import style from '../constants/Styles';
import { AVText } from './text/AVText';
import Colors from '../constants/Colors';

const MenuContainer = ({ navigation }) => {
  const iconStyle = { color: Colors.steelGray, paddingRight: 20 };
  const textStyle = { paddingBottom: 5 };
  return (
    <Container>
      <Header style={{ ...style.drawer.style }}>
        <Image
          source={require('../assets/images/logo_small.png')}
          style={{ height: 200 }}
        />
      </Header>
      <Content>
        <List>
          <ListItem onPress={() => { navigation.closeDrawer(); navigation.navigate('Home'); }} style={{ alignItems: 'center', flex: 1 }}>
            <Icon name="home" style={iconStyle} />
            <AVText style={textStyle}>Domů</AVText>
          </ListItem>
          <ListItem onPress={() => { navigation.closeDrawer(); navigation.navigate('Harmonogram'); }}>
            <Icon name="list" style={iconStyle} />
            <AVText style={textStyle}>Harmonogram</AVText>
          </ListItem>
          <ListItem onPress={() => { navigation.closeDrawer(); navigation.navigate('Spirit'); }}>
            <Icon name="heart" style={iconStyle} />
            <AVText style={textStyle}>Duchovní program</AVText>
          </ListItem>
          <ListItem onPress={() => { navigation.closeDrawer(); navigation.navigate('Speakers'); }}>
            <Icon name="contacts" style={iconStyle} />
            <AVText style={textStyle}>Přednášející</AVText>
          </ListItem>
          <ListItem onPress={() => { navigation.closeDrawer(); navigation.navigate('Activities'); }}>
            <Icon name="pulse" style={iconStyle} />
            <AVText style={textStyle}>Aktivity</AVText>
          </ListItem>
          <ListItem onPress={() => { navigation.closeDrawer(); navigation.navigate('Map'); }}>
            <Icon name="map" style={iconStyle} />
            <AVText style={textStyle}>Mapy</AVText>
          </ListItem>
          <ListItem onPress={() => { navigation.closeDrawer(); navigation.navigate('Contact'); }}>
            <Icon name="paper-plane" style={iconStyle} />
            <AVText style={textStyle}>Kontakt</AVText>
          </ListItem>

        </List>
      </Content>
    </Container>
  );
};

const MenuDrawer = withNavigation(MenuContainer);

export default MenuDrawer;
