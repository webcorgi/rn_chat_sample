# REACT NATIVE - contextAPI, styed-component 구축 샘플

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

#### 설치

```
npm install --save styled-components
```

#### 설정 - babel.config.js에 아래소스 추가

```
module.exports = {
  ...
  plugins: ['babel-plugin-styled-components'],
};
```

#### 사용

```
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

## docker로 웹소켓 연결 실패뜸.. 해결방법

#### 웹소켓 연결 안되는 이유?

- docker를 이용해 로컬서버를 구축해놨는데, expo를 이용해 폰으로 열면 localhost:8081 port를 인식하지 못함.

#### 해결방법

- expo를 열고, Run in web browser로 실행해서 웹에서 띄워 작업해야함.
