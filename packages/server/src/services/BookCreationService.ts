import { Book } from '@foton-challenge/common'
import { Service } from 'typedi'
import { getRepository } from 'typeorm'

import { BookModel } from '../models'

@Service()
class BookCreationService {
  private readonly repository = getRepository(BookModel)

  public execute = ({
    name,
    author,
    description,
    coverUrl,
    readUrl,
  }: Book): Promise<Book> => {
    const book = this.repository.create({
      name,
      author,
      description,
      coverUrl,
      readUrl,
    })

    return this.repository.save(book)
  }
}

export { BookCreationService }
