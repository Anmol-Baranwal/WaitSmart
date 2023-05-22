import React from "react";
import { useAuthContext } from "@/lib/firebase/context/AuthContext";
import { useRouter, useEffect } from "next/router";

const ProtectedPage = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // Redirect to the other page for unauthorized access
      router.push("/");
    }
  }, [user, router]);

  return <h1>Only logged-in users can view this page</h1>;
};

export default ProtectedPage;
