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
			className="mt-12 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3"
		>
			{posts.map((url) => (
				/* min-w-0 מבטל את min-width:auto של פריט גריד, אחרת רוחב
				   המינימום של האייפריים של אינסטגרם מרחיב את העמודה */
				<li key={url} className="flex min-w-0 justify-center">
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
