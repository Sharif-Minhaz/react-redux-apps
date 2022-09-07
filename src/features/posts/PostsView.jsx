import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./postSlice";

const PostsView = () => {
	const { posts, isLoading, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [fetchPosts]);

	return (
		<div>
			<h1>PostsView - 0 to All</h1>
			{isLoading ? (
				"Loading..."
			) : error ? (
				<p>{error}</p>
			) : (
				<section>
					{posts.map((post) => (
						<article key={post.id}>
							<h5>{post.title}</h5>
							<p>{post.body}</p>
						</article>
					))}
				</section>
			)}
		</div>
	);
};

export default PostsView;
