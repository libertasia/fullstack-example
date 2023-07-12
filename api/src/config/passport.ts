import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import UserServices from "../services/users";

import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload, done) => {
    const userEmail = payload.email;
    const foundUser = await UserServices.findUserByEmail(userEmail);
    done(null, foundUser);
    // next()
  }
);

// token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZHJlYUBnbWFpbC5jb20iLCJfaWQiOiI2NGFiZTFmMjg2Y2Q5NGY4OGM5OTZlM2UiLCJpYXQiOjE2ODkxNTE3ODUsImV4cCI6MTY4OTE1NTM4NX0.CAqJK59b_DG9UhcBLrHVAtEtiL3gjn4QCUJOdEq1p0k
