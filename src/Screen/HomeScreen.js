import React from 'react';
import Signup from '../components/Signup'
import styled from 'styled-components/native';

function HomeScreen({ navigation }) {
    return (
        <Container>
            <Signup navigation={navigation} />
        </Container>
    );
}

export default HomeScreen;

/*********************************************************
* styling
*********************************************************/

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;
