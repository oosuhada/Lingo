import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const { userId } = await auth();

  if (userId) redirect("/learn");

  return (
    <SignIn
      routing="path"
      path="/sign-in"
      signUpUrl="/sign-up"
      fallbackRedirectUrl="/learn"
    />
  );
};

export default SignInPage;
