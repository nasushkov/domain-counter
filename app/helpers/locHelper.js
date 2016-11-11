
export default (messages, prefix) => {
    return (key) => {
        return messages[prefix + key]
    }
}