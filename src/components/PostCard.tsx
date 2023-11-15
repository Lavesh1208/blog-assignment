"use client";

import { IPost } from "@/@types/postTypes";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PostCardProps {
	post: IPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
	const { postImage, title, summary, author, slug, postContent } = post.fields;
	const router = useRouter();

	return (
		<div className="post-card" onClick={() => router.push(`/posts/${slug}`)}>
			<Image
				className="post-image"
				src={`https://${postImage.fields.file.url}`}
				alt={title}
				width={300}
				height={300}
			/>
			<div className="post-details">
				<div className="title">{title}</div>
				<div className="summary">{summary}</div>
				<div className="author">By {author.fields.author}</div>
				<div className="post-content">{postContent}</div>
			</div>
		</div>
	);
};

export default PostCard;
