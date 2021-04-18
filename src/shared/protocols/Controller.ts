import { Request, Response } from 'express'

export interface Controller {
  index(request: Request, response: Response): Promise<Response>
  store(request: Request, response: Response): Promise<Response>
  show(request: Request, response: Response): Promise<Response>
  delete(request: Request, response: Response): Promise<Response>
  save(request: Request, response: Response): Promise<Response>
}
