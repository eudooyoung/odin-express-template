import { findUserByUsername } from "@/repositories/user.repository.js";
import bcrypt from "bcryptjs";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import type { JwtPayload } from "jsonwebtoken";
import { findUserById } from "@/repositories/user.repository.js";
import { env } from "./env.config.js";
import type { AuthUser } from "@/types/user.types.js";

// local strategy
passport.use(
  new LocalStrategy((username, password, done) => {
    void (async () => {
      try {
        const user = await findUserByUsername(username);
        if (!user) {
          return done(null, false);
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          return done(null, false);
        }
        const authUser: AuthUser = {
          id: user.id,
          username: user.username,
        };
        return done(null, authUser);
      } catch (error) {
        return done(error);
      }
    })();
  }),
);

// jwt strategy
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: env.jwtSecret,
      algorithms: ["HS256"],
      // TODO: change app-name
      issuer: "app-name",
    },
    (payload: JwtPayload, done) => {
      void (async () => {
        try {
          const user = await findUserById(Number(payload.sub));
          if (!user) {
            return done(null, false);
          }
          const authUser: AuthUser = {
            id: user.id,
            username: user.username,
          };
          return done(null, authUser);
        } catch (error) {
          done(error);
        }
      })();
    },
  ),
);

export default passport;
