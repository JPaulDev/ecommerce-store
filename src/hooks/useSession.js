import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../features/auth/authSlice';
import { useGetUserQuery } from '../services/user';

export default function useSession({
  redirectTo = '',
  redirectIfFound = false,
} = {}) {
  const { user, isAuthenticated, isLoading } = useSelector(selectAuth);
  const router = useRouter();

  // Attempt to fetch user data only once on page load.
  useGetUserQuery(undefined, { skip: !isLoading });

  useEffect(() => {
    if (!redirectTo || isLoading) return;

    if (!isAuthenticated || (redirectIfFound && isAuthenticated)) {
      router.push(redirectTo);
    }
  }, [isAuthenticated, isLoading, redirectTo, redirectIfFound, router]);

  return { user, isAuthenticated, isLoading };
}
