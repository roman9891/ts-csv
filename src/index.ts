// import { MatchReader } from "./MatchReader"
import { CsvFileReader} from './CSVFileReaderRefactor'
import { MatchReaderRF } from "./MatchReaderRefactor"
import { Summary } from "./Summary"
import { WinsAnalysis } from "./analyzers/WinsAnalysis"
import { ConsoleReport } from "./outputTargets/ConsoleReport"
import { HTMLReport } from './outputTargets/HTMLReport'


// const reader = new MatchReader('football.csv')
// reader.read()

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReaderRF(csvFileReader)

matchReader.load()

const winsAnalysis = new WinsAnalysis('Wolves')
// const consoleReport = new ConsoleReport()
// const summary = new Summary(winsAnalysis, consoleReport)
const htmlReport = new HTMLReport()
const summary = new Summary(winsAnalysis, htmlReport)

summary.buildAndPrintReport(matchReader.matches)
