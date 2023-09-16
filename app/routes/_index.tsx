import type { MetaFunction , LoaderFunction} from '@remix-run/node';
import { UserButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import { redirect } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/auth/sign-in");
  }
  return {};
}

export default function Index() {
  return (
    <div>
      <h1>Index route</h1>
      <p>You are signed in!</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
    );
}