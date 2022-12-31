import checkAuthStatus from '../../../middleware/auth';
import createHandler from '../../../middleware/handler';

const handler = createHandler();

handler.get(checkAuthStatus, (req, res) =>
  res.status(200).json({ user: req.user })
);

export default handler;
