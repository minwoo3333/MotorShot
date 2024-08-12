# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### 폴더 설명 

```
my-react-app/
├── public/ # 정적 파일들이 위치한 폴더로, index.html 및 사이트 아이콘 등이 포함됩니다.
│ ├── index.html # 리액트 앱이 로드되는 기본 HTML 템플릿입니다.
│ ├── favicon.ico # 웹페이지의 파비콘 파일입니다.
│ └── ... # 기타 정적 파일들이 위치합니다.
│
├── src/ # 주요 소스 코드가 포함된 폴더입니다.
│ ├── assets/ # 이미지 및 아이콘과 같은 정적 자산이 위치한 폴더입니다.
│ │ ├── icons/ # 애플리케이션에서 사용하는 아이콘 파일들이 포함됩니다.
│ │ └── images/ # 프로젝트에서 사용하는 이미지 파일들이 저장됩니다.
│ │
│ ├── components/ # 재사용 가능한 리액트 컴포넌트를 위한 폴더입니다.
│ │ └── Hello.js # 간단한 테스트 및 데모용 컴포넌트입니다.
│ │
│ ├── pages/ # 주요 페이지 컴포넌트가 포함된 폴더입니다. (예: 메인 페이지, 업로드 페이지 등)
│ │ └── (추후 추가 가능) # 현재는 비어 있으며, 각 페이지를 위한 컴포넌트를 이곳에 추가할 수 있습니다.
│ │
│ ├── services/ # API 호출이나 데이터 처리를 위한 서비스 파일들이 위치한 폴더입니다.
│ │ └── (추후 추가 가능) # 현재는 비어 있으며, 서버와의 통신 및 데이터 처리를 위한 코드가 추가될 수 있습니다.
│ │
│ ├── styles/ # CSS 파일이 저장된 폴더로, 스타일과 관련된 모든 파일이 위치합니다.
│ │ └── App.css # 애플리케이션 전반에 적용되는 글로벌 스타일이 정의된 CSS 파일입니다.
│ │
│ ├── App.js # 리액트 앱의 루트 컴포넌트로, 모든 컴포넌트가 이 컴포넌트 내에서 렌더링됩니다.
│ ├── App.test.js # App.js 컴포넌트에 대한 테스트 파일입니다.
│ ├── index.css # 글로벌 CSS 스타일이 정의된 파일입니다.
│ ├── index.js # 리액트 앱이 DOM에 렌더링되는 진입점(엔트리 포인트)입니다.
│ ├── logo.svg # 기본 리액트 로고 파일입니다. 필요에 따라 변경 가능합니다.
│ ├── reportWebVitals.js # 웹 성능 측정 도구와 관련된 코드입니다.
│ └── setupTests.js # 테스트 환경 설정을 위한 파일입니다.
│
├── .gitignore # Git에서 추적하지 않을 파일들을 명시하는 파일입니다.
├── package.json # 프로젝트의 의존성 관리 및 실행 스크립트가 정의된 파일입니다.
├── README.md # 프로젝트에 대한 설명 및 가이드가 포함된 파일입니다.
└── yarn.lock # Yarn 패키지 관리자의 잠금 파일로, 설치된 패키지의 버전이 고정됩니다.
```

### `yarn install` 또는 `npm install`

### 오류나면 Command Prompt로 변경

### `yarn start`

