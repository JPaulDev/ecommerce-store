import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const server = setupServer(
  rest.get('api/user/userinfo', (req, res, ctx) => res.once(ctx.status(401)))
);
