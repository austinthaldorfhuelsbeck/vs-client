import { ChangeEvent, FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/contextProvider";
import { IUser } from "../interfaces/models.interface";
import { login, logout, register } from "../middleware/auth.api";
import useStatus from "./useStatus";

interface Props {
	toggle: (e: any) => void;
}
const useAuth = ({ toggle }: Props) => {
	// context
	const { setCurrentUser } = useUser();

	// hooks
	const navigate = useNavigate();
	// error/ success status hook
	const { success, error, handleError } = useStatus();

	// cookie handling
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);

	// state for login form
	const [formData, setFormData] = useState<Partial<IUser>>({
		email: "",
		password: "",
	});

	// handlers for login/logout
	const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setFormData((prev) => {
			const { name, value } = e.target;
			return { ...prev, [name]: value };
		});
	};
	const onLogin = async (e: FormEvent) => {
		e.preventDefault();
		const res = await login(formData);
		if (res.data) {
			setCurrentUser(res.data);
			toggle(e);
			setCookie("user", res.data._id, { path: "/" });
			navigate("/studio");
		}
		if (res.error) handleError(res.error);
	};
	const onRegister = async (e: FormEvent) => {
		e.preventDefault();
		const registerRes = await register(formData);
		if (registerRes.error) handleError(registerRes.error);
		if (registerRes.data) {
			const loginRes = await login(formData);
			if (loginRes.error) handleError(loginRes.error);
			if (loginRes) {
				setCurrentUser(loginRes.data);
				toggle(e);
				setCookie("user", loginRes.data._id, { path: "/" });
				navigate("/studio");
			}
		}
	};
	const onLogout = async () => {
		const res = await logout();
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
		formData,
		onChange,
		onLogin,
		onRegister,
		onLogout,
		loginSuccess: success,
		loginError: error,
	};
};

export default useAuth;