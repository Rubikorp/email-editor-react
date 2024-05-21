import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import styles from './EmailEditor.module.css'

export function EmailEditor() {
	return (
		<div>
			<h1>Email editor</h1>
			<div className={styles.card}>
				<div className={styles.editor}>
					Hey! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
					exercitationem architecto, doloremque mollitia repellat perferendis
					suscipit totam expedita adipisci placeat hic rerum quisquam et omnis
					earum quaerat voluptatum! Dolorem, voluptas?
				</div>
				<div className={styles.actions}>
					<div className={styles.tools}>
						<button>
							<Eraser size={17} />
						</button>
						<button>
							<Bold size={17} />
						</button>
						<button>
							<Italic size={17} />
						</button>
						<button>
							<Underline size={17} />
						</button>
					</div>
					<button>Send now</button>
				</div>
			</div>
		</div>
	)
}
