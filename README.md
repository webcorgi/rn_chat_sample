# REACT NATIVE 에 contextAPI, styed-component 구축 샘플

## expo 설치 및 초기설정

```
// expo 설치
npm install expo-cli --global

// 프로젝트 생성
expo init rn_chat_sample

// 프로젝트로 이동
cd rn_chat_sample

// expo 이용해 프로젝트 시작
expo start

출처: https://hoony-gunputer.tistory.com/entry/react-native-개발-환경-설정하기expo [후니의 컴퓨터]
```

## styled-component

```
// 설치
npm install --save styled-components
```

```
// 설정 - babel.config.js에 아래소스 추가

module.exports = {
  ...
  plugins: ['babel-plugin-styled-components'],
};
```

```
// 사용

...
import styled from 'styled-components/native';


export default function App() {
  return (
    <Container>
      <TextIntro>Hello !</TextIntro>
    </Container>tkdy
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

const TextIntro = styled.Text`
  color:blue;
  font-size:50px;
`;
```

## contextAPI

```
./src/context/contextAPI.js   -> store제외한 모든설정 주석으로 작성 참고
./src/context/storeContext.js -> store 설정
./app.js -> store 최상위에 등록함

./src/components/       -> state, actions 실제사용방법 참고
```
