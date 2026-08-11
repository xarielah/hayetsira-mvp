import { InstagramEmbed } from "react-social-media-embed";

type Props = { posts: readonly string[] };

/**
 * עטיפה דקה סביב סקריפט ההטמעה הרשמי של אינסטגרם.
 * הספרייה מטפלת בטעינת embed.js, בניסיון חוזר ובגובה האייפריים —
 * אין כאן שום גרידה של תוכן ואין מה לתחזק מעבר לרשימת הקישורים.
 */
export default function InstagramPosts({ posts }: Props) {
	return (
		<ul
			role="list"
			className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:w-full w-[90%]"
		>
			{posts.map((url) => (
				<li key={url} className="flex justify-center">
					<InstagramEmbed
						url={url}
						width="100%"
						// captioned
						/* שלד טעינה בצבעי האתר, כדי שלא תהיה קפיצה לבנה */
						placeholderProps={{
							className: "bg-sand-200 dark:bg-sand-800",
							style: { maxHeight: 480, width: "100%" },
							url: url,
						}}
					/>
				</li>
			))}
		</ul>
	);
}
