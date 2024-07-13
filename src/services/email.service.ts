import axios from 'axios'
import { IEmail } from '../pages/types'

class EmailService {
	private URL = 'http://localhost:3000/emails'

	async getEmails(): Promise<IEmail[] | void>  {
		const data = await axios.get<IEmail[]>(this.URL).catch(e => console.log(e))
		if (data !== null) {data}
	}

	async createEmail(text: string) {
		const data = await axios.post(this.URL, { text }).catch(e =>console.log(e))
		if (data !== null) {data}
	}
}

export const emailService = new EmailService()
