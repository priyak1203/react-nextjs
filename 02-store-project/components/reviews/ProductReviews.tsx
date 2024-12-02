import Comment from './Comment';
import Rating from './Rating';

function ProductReviews() {
  return (
    <div>
      <h2>product reviews</h2>
      <Rating rating={3} />
      <Comment
        comment={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus delectus deleniti sit sapiente iusto consequuntur fuga facere eligendi alias eum nihil, autem dicta saepe nam voluptas repudiandae magni veniam nemo?`}
      />
    </div>
  );
}

export default ProductReviews;
