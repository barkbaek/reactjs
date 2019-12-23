import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor");
    }

    /* 렌더링 되기 전 실행 */
    componentWillMount() {
        console.log("componentWillMount");
    }

    /* 랜더링 된 후 실행 */
    componentDidMount() {
        console.log("componentDidMount");
    }

    /* 새로운 props를 받았을 때 */
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", JSON.stringify(nextProps));
    }

    /* component가 업데이트를 해야할지 말아야할지 정하는 부분 */
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", JSON.stringify(nextProps), JSON.stringify(nextState));
        return true;
    }

    /* component 업데이트 되기 전 실행 */
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate", JSON.stringify(nextProps), JSON.stringify(nextState));
    }

    /* component 업데이트 후 실행 */
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", JSON.stringify(prevProps), JSON.stringify(prevState));
    }

    /* component가 제거될 때 실행 */
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        console.log("render");
        return (
            <div>{this.props.number}</div>
        );
    }
}

export default Card;