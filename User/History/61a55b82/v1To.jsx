import './comments.scss';

const Comments = () => {
  return (
    <div className="comments">
      <label className="comments__label">Observaciones sobre la orden:</label>
      <textarea className="comments__textarea" />
    </div>
  );
};

export default Comments;
