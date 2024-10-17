import { Sequelize } from "sequelize";
import config from "../../config";
import { initUser } from "../../database/postgres/models/User";

export let sequelize: Sequelize;

function initModals(): void {
  initUser(sequelize)
}
      
export default async function (): Promise<Sequelize> {

  const user = config.postgres.POSTGRES_USER
  const password = config.postgres.POSTGRES_PASSWORD
  const host = config.postgres.POSTGRES_HOST
  const name = config.postgres.POSTGRES_NAME
  const port = config.postgres.POSTGRES_PORT

  const postgresURI = `postgres://${user}:${password}@${host}:${port}/${name}`;
  console.log(postgresURI, 'url')

  // sequelize = new Sequelize(postgresURI, {
  //   dialect: "postgres",
  //   logging: false,
  // });
  
  sequelize = new Sequelize(
    config.postgresLocal.POSTGRES_DB_LOCAL, 
    config.postgresLocal.POSTGRES_USER_LOCAL, 
    config.postgresLocal.POSTGRES_PASSWORD_LOCAL, 
    {
      host: config.postgres.POSTGRES_HOST,
      dialect: 'postgres'
    }
  );

  await sequelize.authenticate()
  initModals()
  // if (parseInt(process.env.POSTGRES_SYNC || "0")) {
  //   await sequelize.sync({ alter: { drop: false } });
  // }
  console.log("Postgres connected!");
  return sequelize;
}