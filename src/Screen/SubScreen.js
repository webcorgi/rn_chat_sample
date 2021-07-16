import React from 'react';
import styled from 'styled-components/native';
import Counter from '../components/Counter';
import CountingText from '../components/CountingText'

function SubScreen() {
    return (
        <Container>
            <CountingText />
            <Counter />
        </Container>
    );
}

export default SubScreen;

/*********************************************************
* styling
*********************************************************/

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;
