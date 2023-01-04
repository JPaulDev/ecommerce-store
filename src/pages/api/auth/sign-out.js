import createHandler from '../../../middleware/handler';

const handler = createHandler();

handler.post(async (req, res) => {
  await req.session.destroy();
  return res.status(200).end();
});

export default handler;
