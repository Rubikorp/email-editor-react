import { EmailEditor } from '../Components/EmailEditor'
import { EmailList } from '../email-list/EmailList'
import styles from './Home.module.scss'

export function Home() {
	return (
		<div className={styles.home}>
			<EmailEditor />
			<EmailList />
		</div>
	)
}
