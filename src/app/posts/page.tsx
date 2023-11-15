import { IPost } from "@/@types/postTypes";
import PostCard from "@/components/PostCard";
import { client } from "@/lib/contentful/client";
import React from "react";

const fetchAllPosts = async () => {
	const res = await client.getEntries({
		content_type: "post",
	});

	return res.items;
};

const AllPostsPage = async () => {
	const posts = (await fetchAllPosts()) as IPost[];

	return (
		<div>
			<h1>All Posts Page</h1>
			<div className="posts">
				{posts.map((post, index) => (
					<div key={index}>
						<PostCard post={post} />
					</div>
				))}
			</div>
		</div>
	);
};

export default AllPostsPage;
