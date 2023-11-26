import Action from './Action';

function AddComment({
  type,
  addComment,
  cancel = null,
  inputValue,
  handleInputChange,
}) {
  return (
    <>
      <input
        className="commentInput"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <Action
        className="commentButton"
        type={type}
        handleClick={inputValue == '' ? null : addComment}
      />
      {type == 'Reply' && (
        <Action className="commentButton" type="Cancel" handleClick={cancel} />
      )}
    </>
  );
}

export default AddComment;
