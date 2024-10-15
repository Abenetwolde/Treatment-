import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://medical_owner:WIkhlbgJip46@ep-solitary-sunset-a5z1msm5.us-east-2.aws.neon.tech/medical?sslmode=require"
);
export const db = drizzle(sql, { schema });
