const Message = (props) => {
    const {name = `Stranger`} = props;
    return <div>
        <p>Hello, {name}.</p>
    </div>;
};
export default Message;