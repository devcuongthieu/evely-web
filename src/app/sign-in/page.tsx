import Login from "@/features/auth/views/Login/Login";
import { redirectIfAuthenticated } from "@/utils/server";

export default async function Page() {
  await redirectIfAuthenticated();
  return <Login />;
}
