import { ChangeEvent, FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/contextProvider";
import { IApiResponse } from "../interfaces/api.interface";
import { IUser } from "../interfaces/models.interface";
import { login, logout } from "../middleware/auth.api";
import useStatus from "./useStatus";

const useAuth = () => {
	// context
	const { setCurrentUser } = useUser();

	// hooks
	const navigate = useNavigate();
	// error/ success status hook
	const { success, error, handleSuccess, handleError, clearStatus } =
		useStatus();

	// cookie handling
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);

	// state for login form
	const [loginData, setLoginData] = useState<Partial<IUser>>({
		email: "",
		password: "",
	});

	// handlers for login/logout
	const onLoginChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		setLoginData((prev) => {
			const { name, value } = e.target;
			return { ...prev, [name]: value };
		});
	};
	const onLogin = async (e: FormEvent) => {
		e.preventDefault();
		const res: IApiResponse = await login(loginData);
		if (res.data) {
			setCurrentUser(res.data);
			handleSuccess(`Successfully logged in user ${res.data._id}`);
			clearStatus();
			setCookie("user", res.data._id, { path: "/" });
			navigate("/studio");
		} else if (res.error) handleError(res.error);
	};
	const onLogout = async () => {
		const res: IApiResponse = await logout();
		if (res.error) {
			handleError(res.error);
		} else {
			setCurrentUser(undefined);
			removeCookie("user");
			navigate("/");
		}
	};

	return {
		cookies,
		loginData,
		onLoginChange,
		onLogin,
		onLogout,
		loginSuccess: success,
		loginError: error,
	};
};

export default useAuth;