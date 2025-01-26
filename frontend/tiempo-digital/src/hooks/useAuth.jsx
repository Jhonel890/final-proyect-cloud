import { POST } from "../utils/methods";
export async function authApi(data) {
    return POST("/cuenta/auth", data);
}