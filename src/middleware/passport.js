import argon2 from 'argon2';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import { findSanitizedUserById, findUserByEmail } from '../lib/database/user';

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await findSanitizedUserById(id);

    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await findUserByEmail(email);

        if (!user) {
          return done(null, false);
        }

        const isMatch = await argon2.verify(user.password, password);

        if (isMatch) {
          // Password removed from user object for security.
          return done(null, { ...user, password: null });
        }

        return done(null, false);
      } catch (err) {
        return done(err);
      }
    }
  )
);

export default passport;
