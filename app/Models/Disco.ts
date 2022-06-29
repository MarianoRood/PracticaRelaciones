import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Artista from './Artista'

export default class Disco extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name_disk: string

  @column()
  public date_publication: Date

  @column()
  public disquera: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(()=> Artista, {
    pivotTable: 'discos_artistas'
  })
  public artista: ManyToMany<typeof Artista>
}
