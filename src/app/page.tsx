import { IPost } from "@/@types/postTypes";
import PostCard from "@/components/PostCard";
import { client } from "@/lib/contentful/client";
import Image from "next/image";
import Link from "next/link";

const fetchAllPosts = async () => {
	const res = await client.getEntries({
		content_type: "post",
	});

	return res.items;
};

const HomePage = async () => {
	const posts = (await fetchAllPosts()) as IPost[];
	return (
		<div>
			<h1>Home Page</h1>
			<div className="posts">
				{posts.slice(0, 3).map((post, index) => (
					<div key={index}>
						<PostCard post={post} />
					</div>
				))}
			</div>
			<Link href="/posts" className="view-all-posts">
				View All Posts
			</Link>
		</div>
	);
};

export default HomePage;
