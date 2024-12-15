import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};

const Account = async () => {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  return (
    <h2 className="font-semibold text-2xl text-accent-700 mb-7">
      Welcome, {firstName}
    </h2>
  );
};

export default Account;
