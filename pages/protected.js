import React from "react";
import { useAuthContext } from "@/lib/firebase/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProtectedPage = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      // Redirect to the other page for unauthorized access
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, [user, router]);

  if (isLoading) {
    // Render a loading indicator or a blank screen while checking the authentication state
    return <h1>Loading...</h1>;
  }

  return <h1>Only logged-in users can view this page</h1>;
};

export default ProtectedPage;
