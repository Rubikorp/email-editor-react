import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import styles from './EmailEditor.module.css'
import parse from 'html-react-parser'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { emailService } from '../services/email.service'
import { useEditor } from './useEditor'

export function EmailEditor() {
	const { text, setText, applyFormat, updateSelection, textRef } = useEditor()

	const queryClient = useQueryClient()

	const { mutate, isLoading } = useMutation({
		mutationKey: ['create email'],
		mutationFn: () => emailService.createEmail(text),
		onSuccess() {
			setText('')
			queryClient.refetchQueries({ queryKey: ['email list'] })
		},
	})

	return (
		<div>
			<h1>Email editor</h1>
			<div
				className={`${styles.preview} ${
					text === '' ? styles.animation_prev_close : styles.animation_prev_open
				}`}
			>
				{parse(text)}
			</div>
			<div className={styles.card}>
				<textarea
					ref={textRef}
					onSelect={updateSelection}
					className={styles.editor}
					spellCheck='false'
					value={text}
					onChange={e => setText(e.target.value)}
					placeholder='Enter email...'
				>
					{text}
				</textarea>
				<div className={styles.actions}>
					<div className={styles.tools}>
						<button>
							<Eraser size={17} onClick={() => setText('')} />
						</button>
						<button>
							<Bold size={17} onClick={() => applyFormat('bold')} />
						</button>
						<button>
							<Italic size={17} onClick={() => applyFormat('italic')} />
						</button>
						<button>
							<Underline size={17} onClick={() => applyFormat('underline')} />
						</button>
					</div>
					<button
						disabled={isLoading}
						onClick={() => {
							mutate()
						}}
					>
						Send now
					</button>
				</div>
			</div>
		</div>
	)
}
