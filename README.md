# ssr study

## about

ssr을 직접 구현해봅니다.

## Skills

- React
- Express

## 정리

- router 설정 후 eject (웹팩 설정을 위해)
- entry 파일 생성 index.server.js
- config/path 설정 : ssrIndexJs, ssrBuild 추가
- 로더 설정 : 로더는 파일을 불러올 때 확장자에 맞게 필요한 처리를 해준다,
  - js는 babel을 사용하여 트랜스파일링을 해준다
  - css는 모든 css코드를 결합해준다
  - 이미지 파일은 파일을 다른 경로에 저장하고 그 파일에 대한 경로를 자바스크립트에서 참조할 수 있게 해준다.
- server에서 랜더링 할 때는 node_modules에 있는 라이브러리를 포함하여 번들링 할 필요가 없다. 서버에서도 node_modules에서 불러올 수 있기 때문 따라서 webpack-node-externals 라이브러리를 사용한다.
  - webpack.config.js를 참고해 webpack.config.server.js 를 만들어준다
  - build.js를 참고해 build.server.js를 만들어 준다.
  - package.config 수정

## 에러들

- Module not found: Error: Can't resolve './App'
  - webpack.config 파일에 추가
  ```js
  module.exports = {
    //...
    resolve: {
      extensions: [".js", ".jsx"],
    },
  };
  ```
