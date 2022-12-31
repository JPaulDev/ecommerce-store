import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../features/auth/authSlice';
import { useGetUserQuery } from '../services/user';

export default function useSession({
  redirectTo = '',
  redirectIfFound = false,
} = {}) {
  const { user, isAuthenticated } = useSelector(selectAuth);
  const { isLoading } = useGetUserQuery(undefined, { skip: !!user });
  const router = useRouter();

  useEffect(() => {
    if (!redirectTo || isLoading) return;

    if (!isAuthenticated || (redirectIfFound && isAuthenticated)) {
      router.push(redirectTo);
    }
  }, [isAuthenticated, isLoading, redirectTo, redirectIfFound, router]);

  return { user, isAuthenticated, isLoading };
}
