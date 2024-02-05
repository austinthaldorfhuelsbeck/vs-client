import { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import useStatus from "../../hooks/useStatus";
import { IAppError } from "../../interfaces/api.interface";
import { Alert } from "../../styles/common/common.style";
import { Container } from "./Terms.style";

const Terms: FC = () => {
	const { error, handleError, clearStatus } = useStatus();
	const [content, setContent] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadContent = async () => {
			try {
				const res = await fetch("termsContent.md");
				if (!res.ok) {
					throw new Error(
						`Failed to fetch content (HTTP ${res.status})`,
					);
				}
				const text = await res.text();
				setContent(text);
			} catch (err) {
				handleError(err as IAppError);
			} finally {
				setLoading(false);
				clearStatus();
			}
		};

		loadContent();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			{loading && <p>Loading...</p>}
			{content && <ReactMarkdown children={content} />}
			{error && <Alert $error={error} />}
		</Container>
	);
};

export default Terms;
