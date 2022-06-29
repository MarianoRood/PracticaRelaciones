import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Disco from './Disco'

export default class Artista extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name_artist: string

  @column()
  public date_creation: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(()=> Disco, {
    pivotTable: 'discos_artistas'
  })
  public discos: ManyToMany<typeof Disco>
}
