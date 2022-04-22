import fs from 'fs'
import { dateStringToDate } from './utils'

export class CsvFileReader {
    data: string[][] = []

    constructor (public filename: string) {

    }

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf8'
        })
        .split('\n')
        .map((row) => row.split(','))
        .map((row): any => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                
            ]
        })
    }
}