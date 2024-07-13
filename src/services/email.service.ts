import axios from 'axios'
import { IEmail } from '../pages/types'
interface IData {
	data: Array<{
		id: string
		text: string
	}>
}

class EmailService {
	private URL = 'http://localhost:3000/emails'

	async getEmails() {
		const { data } = await axios.get<IEmail[]>(this.URL).catch(e => console.log(e))
		return data
	}

	async createEmail(text: string) {
		const { data } = await axios.post(this.URL, { text }).catch(e =>console.log(e))
		return data
	}
}

export const emailService = new EmailService()
