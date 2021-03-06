import fs from 'fs'

export abstract class CsvFileReader<T> {
    data: T[] = []

    constructor (public filename: string) {

    }

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf8'
        })
        .split('\n')
        .map((row) => row.split(','))
        .map(this.mapRow)
    }

    abstract mapRow(row: string[]): T
}