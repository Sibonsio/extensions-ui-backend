import dotenv from 'dotenv'

const dotenvConfig = () => { return dotenv.config({ path: ".env" }) }
export default dotenvConfig