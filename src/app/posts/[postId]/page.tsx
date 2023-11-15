import { IPost } from "@/@types/postTypes";
import RichText from "@/components/RichText";
import { client } from "@/lib/contentful/client";
import Image from "next/image";
import React from "react";

interface SinglePostPageProps {
	params: { postId: string };
}

const fetchPostsBySlug = async (postId: string) => {
	const res = await client.getEntries({
		content_type: "post",
		"fields.slug": postId,
	});

	return res.items;
};

const SinglePostPage: React.FC<SinglePostPageProps> = async ({ params }) => {
	const post = await fetchPostsBySlug(params.postId);
	const { postImage, title, summary, author, postContent } = post[0].fields;

	return (
		<div className="single-post-page">
			<div className="post">
				<Image
					className="post-image"
					src={`https://${postImage.fields.file.url}`}
					alt={post.title}
					width={800}
					height={500}
				/>
				<div className="post-details">
					<div className="title">{title}</div>
					<div className="summary">{summary}</div>
					<div className="author">By {author.fields.author}</div>
					<div className="post-content">{postContent}</div>
				</div>
			</div>
		</div>
	);
};

export default SinglePostPage;
