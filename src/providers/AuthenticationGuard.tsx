import { PropsWithChildren } from "react";
import { useCookies } from "react-cookie";
import ErrorPage from "../views/ErrorPage";

interface ComponentProps {
	component: JSX.Element;
}

const AuthenticationGuard = ({
	component,
}: PropsWithChildren<ComponentProps>) => {
	// cookie handling
	const [cookies] = useCookies(["user"]);

	// only return if authenticated
	return cookies.user ? (
		<>{component}</>
	) : (
		<ErrorPage status={401} message={"Not Authenticated"} />
	);
};

export default AuthenticationGuard;
