import { SignUp } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const SignUpPage = async () => {
  const { userId } = await auth();

  if (userId) redirect("/learn");

  return (
    <SignUp
      routing="path"
      path="/sign-up"
      signInUrl="/sign-in"
      fallbackRedirectUrl="/learn"
    />
  );
};

export default SignUpPage;
