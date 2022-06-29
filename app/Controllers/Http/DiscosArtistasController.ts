import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Artista from 'App/Models/Artista'
import DiscosArtista from 'App/Models/DiscosArtista'

export default class DiscosArtistasController {
    public async index({ response }: HttpContextContract)
    {
        response.ok(
            {
                message: "Consulta Correcta",
                data: await Artista.query().preload('discos')
            }
        )
    }

    public async store({ response, request }: HttpContextContract)
    {
        await DiscosArtista.create(request.all())

        response.ok(
            {
                message: "Se inserto Correctamente",
            }
        )
    }
}

