import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function postController(fastify: FastifyInstance) {
  // GET /api/v1/posts
  fastify.get(
    "/",
    async function (_request: FastifyRequest, reply: FastifyReply) {
      reply.send({
        posts: [
          {
            id: 1,
            title: "Post 1",
            content: "Content 1",
          },
          {
            id: 2,
            title: "Post 2",
            content: "Content 2",
          },
          {
            id: 3,
            title: "Post 3",
            content: "Content 3",
          },
        ],
      });
    },
  );
}
