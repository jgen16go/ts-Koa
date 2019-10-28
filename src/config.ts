export interface IConfig {
  port: number
}

const config: IConfig = {
  port: !process.env.PORT ? 3000 : parseInt(process.env.PORT, 10),
}

export { config }
