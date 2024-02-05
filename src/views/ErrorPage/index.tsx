import React from "react";
import { Link } from "react-router-dom";
import { IAppError } from "../../interfaces/api.interface";
import { InlineButton } from "../../styles/common/common.style";
import { Container, Message, Status } from "./ErrorPage.style";

const ErrorPage: React.FC<IAppError> = ({ status, message }) => {
	return (
		<Container>
			<Status data-h1={status}>{status}</Status>
			<Message>{message}</Message>
			<Link to="/">
				<InlineButton $secondary>Go Back Home</InlineButton>
			</Link>
		</Container>
	);
};

export default ErrorPage;
