import React from 'react';

interface IJsView {
    content: string;
}
const JsView: React.FC<IJsView> = (props) => {
    return <pre>{props.content}</pre>;
};
export default JsView;
