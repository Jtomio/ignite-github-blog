import { useCallback, useEffect, useState } from "react";
import { api } from "../services/axios";
import { User } from "../types/User";

export function useUser() {
  const [user, setUser] = useState<User | undefined>();

  const fetchUser = useCallback(async () => {
    const response = await api.get<User>("users/Jtomio");

    setUser(response.data);
  }, []);

  useEffect(() => {
    fetchUser().catch((error) => console.error(error));
  }, [fetchUser]);

  return user;
}