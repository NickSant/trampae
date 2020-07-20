import passport from "passport";
import crypto from "crypto";

const GooglePlusTokenStrategy = require("passport-google-plus-token");
const FacebookStrategy = require("passport-facebook-token");

require("dotenv/config");

import connection from "./database/connection";

passport.use(
  "googleToken",
  new GooglePlusTokenStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await connection("users")
          .select("*")
          .where("third_party_id", profile.id);

        if (existingUser.length === 1) {
          done(null, existingUser);
          return;
        }

        const id = crypto.randomBytes(4).toString("HEX");

        await connection("users").insert({
          id,
          third_party_id: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          image_url: profile.photos[0].value,
        });

        const user = await connection("users").select("*").where("id", id);

        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

passport.use(
  "facebookToken",
  new FacebookStrategy(
    {
      clientID: process.env.FB_CLIENT_ID,
      clientSecret: process.env.FB_CLIENT_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log(accessToken);
        console.log(profile);
        const existingUser = await connection("users")
          .select("*")
          .where("third_party_id", profile.id);

        if (existingUser.length === 1) {
          done(null, existingUser);
          return;
        }

        const id = crypto.randomBytes(4).toString("HEX");

        await connection("users").insert({
          id,
          third_party_id: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          image_url: profile.photos[0].value,
        });

        const user = await connection("users").select("*").where("id", id);

        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);
