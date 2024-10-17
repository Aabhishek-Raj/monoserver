import dotenv from 'dotenv'

const envFound = dotenv.config()
if(envFound.error) {
  throw new Error('⚠️ .env file not found! Make sure to create one')
}

function getEnvVariable<T>(name: string, fallback?: T): T {
  const value = process.env[name];
  
  if (!value) {
    if(fallback !== undefined) {
      console.warn(`⚠️ Environment variable ${name} is not set. Using fallback: ${fallback}`);
      return fallback
    }
    throw new Error(`❌ Environment variable ${name} is missing and no fallback is provided!`);
  }
  if (typeof fallback === 'number') {
    return parseInt(value, 10) as unknown as T;
  }
  if (typeof fallback === 'boolean') {
    return (value === 'true' || value === '1') as unknown as T;
  }
  return value as unknown as T;
} 

export default {
  app: {
    nodeEnv: getEnvVariable<string>('NODE_ENV', 'development'),
    port: getEnvVariable<number>('PORT', 4000),
    apiPrefix: getEnvVariable<string>('API_PREFIX'),
    // debugMode: getEnvVariable<boolean>('DEBUG_MODE', false),
    // dbUrl: getEnvVariable<string>('DATABASE_URL'),
    // apiKey: getEnvVariable<string>('API_KEY'),
  },
  logs: {
    morgan: getEnvVariable<string>('MORGAN', 'combined')
  },
  postgres: {
    POSTGRES_USER: getEnvVariable<string>('POSTGRES_USER'),
    POSTGRES_PASSWORD: getEnvVariable<string>('POSTGRES_PASSWORD'),
    POSTGRES_HOST: getEnvVariable<string>('POSTGRES_HOST'),
    POSTGRES_NAME: getEnvVariable<string>('POSTGRES_NAME'),
    POSTGRES_PORT: getEnvVariable<string>('POSTGRES_PORT'),
  },
  postgresLocal: {
    POSTGRES_USER_LOCAL: getEnvVariable<string>('POSTGRES_USER_LOCAL'),
    POSTGRES_PASSWORD_LOCAL: getEnvVariable<string>('POSTGRES_PASSWORD_LOCAL'),
    POSTGRES_DB_LOCAL: getEnvVariable<string>('POSTGRES_DB_LOCAL'),
  }
};;