import nextConnect from 'next-connect';
import errorHandler from './error-handler';
import passport from './passport';
import session from './session';

/**
 * Each handler should be a new instance of nextConnect as each handler can
 * be mutated by middleware leading to undefined behaviour. See the common
 * errors section.
 *
 * @link https://www.npmjs.com/package/next-connect
 */
export default function createHandler() {
  const handler = nextConnect({
    onError: errorHandler,
    onNoMatch: (req, res) => {
      res.status(405).end(`Method ${req.method} Not Allowed.`);
    },
  });

  // Authentication middleware added to each handler.
  handler.use(session, passport.initialize(), passport.session());

  return handler;
}
