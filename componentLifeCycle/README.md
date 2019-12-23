# Component Mount
### 0. constructor
컴포넌트가 처음 만들어질 때 실행된다. 기본 state를 설정할 수 있다.
### 1. componentWillMount
렌더링 되기 전 실행. 컴포넌트가 DOM 위에 만들어지기 전에 실행된다.
### 2. componentDidMount
랜더링 된 후 실행. 첫 렌더링 마치고 실행된다. 이 안에서 다른 자바스크립트 프레임워크 연동 및 setTimeout, setInterval 및 AJAX 사용. 
### 3. componentWillReceiveProps
새로운 props를 받았을 때. props를 받을 때 실행된다. props에 따라 state를 업데이트 할 때 사용하면 유용하다. 이 안에서 setState를 해도 괜찮다. 
### 4. shouldComponentUpdate
component가 업데이트를 해야할지 말아야할지 정하는 부분. props/state가 변경되었을 때 리렌더링을 할지말지 정한다. 실제로 사용할 때는 필요한 비교를 하고 값을 반환해야 한다. 예 return nextProps.id !== this.props.id; JSON.stringify를 사용하여 여러 field를 편하게 비교한다.     
### 5. componentWillUpdate
component가 업데이트 되기 전 실행. 컴포넌트 업데이트 전 실행된다. 여기서 setState 절대 사용하지 말 것. 
### 6. componentDidUpdate
component 업데이트 후 실행. 컴포넌트가 리렌더링 마친 후 실행된다. 여기서도 setState 사용하지 말 것. 
### 7. componentWillUnmount
component가 제거될 때 실행. 컴포넌트가 DOM에서 사라진 후 실행된다.