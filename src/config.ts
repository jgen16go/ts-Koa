export interface IConfig {
  port: number
}

// const isDev = process.env.NODE_ENV === 'development'

const config: IConfig = {
  port: !process.env.PORT ? 3000 : parseInt(process.env.PORT, 10),
}

export { config }
