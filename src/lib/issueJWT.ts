import { env } from "@/config/env.config.js";
import type { AuthUser } from "@/types/user.types.js";
import jwt, { type JwtPayload } from "jsonwebtoken";

export const issueJWT = (user: AuthUser) => {
  const id = user.id;
  const expiresIn = "1h";
  const payload: JwtPayload = {
    sub: String(id),
  };

  const token = jwt.sign(payload, env.jwtSecret, {
    expiresIn,
    algorithm: "HS256",
    // TODO: change app-name
    issuer: "app-name",
  });

  return {
    token: "Bearer " + token,
    expiresIn,
  };
};
