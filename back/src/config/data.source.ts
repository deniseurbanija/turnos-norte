import { DataSource } from "typeorm";
import { DB_HOST, DB_PASSWORD, DB_USERNAME } from "./envs";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credential";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: 5432,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [User, Appointment, Credential],
  subscribers: [],
  migrations: [],
});