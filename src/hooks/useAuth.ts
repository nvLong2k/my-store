import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/services/auth";

export function useSignIn() {
  return useMutation({
    mutationFn: authService.signIn,
  });
}

export function useSignUp() {
  return useMutation({
    mutationFn: authService.signUp,
  });
}

export function useMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: authService.me,
    retry: false,
  });
}

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      queryClient.clear();
    },
  });
}