import { ServerError } from '@shared/error'
import { HttpResponse } from '@shared/protocols/Http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
})

export const ok = (data: any, statusCode = 200): HttpResponse => ({
  statusCode: statusCode,
  body: data,
})
