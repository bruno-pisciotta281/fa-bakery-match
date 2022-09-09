import React, { Component } from 'react';
import { View, Text } from "react-native";
import { Container, Title } from './styles';
import SystemNavigationBar from 'react-native-system-navigation-bar';

SystemNavigationBar.navigationHide();

export default class Login extends Component {
  render() {
    return (

        <Container>
           <Title>TESTE</Title>
            </Container>
    )
  }
}