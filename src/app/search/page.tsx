"use client";

import algoliasearch from "algoliasearch/lite";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { InstantSearch, SearchBox, Hits, Highlight } from "react-instantsearch";
import "instantsearch.css/themes/satellite.css";

const algoliaAppId = process.env.ALGOLIA_APP_ID as string;
const algoliaApiKey = process.env.ALGOLIA_API_KEY as string;

const searchClient = algoliasearch(
	"9IBGUA0IZY",
	"bab7d272cf6498cc351901d149b2b8ca"
);

function Hit({ hit }: any) {
	const { postImage, title, summary, author, slug, postContent } = hit.fields;
	const router = useRouter();

	return (
		<div onClick={() => router.push(`/posts/${slug["en-US"]}`)}>
			<div>{title["en-US"]}</div>
		</div>
	);
}

const Search = () => {
	return (
		<InstantSearch searchClient={searchClient} indexName="posts">
			<div className="search">
				<SearchBox style={{ width: "500px", height: "80px", margin: "10px" }} />
				<div
					style={{
						cursor: "pointer",
						display: "flex",
						borderBottom: "1px solid #ccc",
						flexDirection: "column",
					}}
				>
					<Hits hitComponent={Hit} />
				</div>
			</div>
			<div className="note">
				<p>*</p>
				<p>Click on the title to view the post</p>
			</div>
		</InstantSearch>
	);
};

export default Search;
