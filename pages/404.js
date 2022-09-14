import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
            router.push("/")
        }, 4000);
	}, []);

	return (
		<div className="not-found">
			<h1>404</h1>
			<h2> Ups! Den side findes ikke </h2>
			<p>
				Du vil nu blive sendt til <Link href="/">forsiden</Link> hvor du kan
				finde andre lækker lækker opskrifter
			</p>

			<style jsx>{`
				.not-found {
					background: #fff;
					padding: 30px;
					box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
					transform: rotateZ(-1deg);
				}
				h1 {
					font-size: 3rem;
				}
			`}</style>
		</div>
	);
}
