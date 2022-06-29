import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Disco from 'App/Models/Disco'

export default class DiscosController {
    public async index({ response }: HttpContextContract)
    {
        try
        {
            /* const artista = await Artista.all() */

            //Esta es una manera mas simplificada de realizar la muestra de datos
            response.ok(
                {
                    message: "Consulta Correcta",
                    data: await Disco.all()
                }
            )
        }
        catch(e)
        {
            response.badRequest(
                {
                    message: "Ocurrio un error",
                    error: e
                }
            )
        }
    }

    public async store({ request, response }: HttpContextContract)
    {
        try
        {
            await Disco.create(request.all())

            response.ok(
                {
                    message: "Se inserto Correctamente"
                }
            )
        }
        catch(e)
        {
            response.badRequest(
                {
                    message: "Ocurrio un error",
                    error: e
                }
            )
        }
    }
}
