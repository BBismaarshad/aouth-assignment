"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const HomePage: React.FC = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
        <p>Signed in as {session.user?.email}</p>
        <button
          onClick={() => signOut()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <p>Not signed in</p>
      <div className="mt-4 space-x-4">
        <button
          onClick={() => signIn("github")}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Sign in using GitHub
        </button>
        <button
          onClick={() => signIn("google")}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Sign in using Google
        </button>
      </div>
    </div>
  );
};

export default HomePage;
