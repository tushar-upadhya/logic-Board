import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'

const Canvas = () => {
    return (
        <div style={{ position: 'fixed', inset: 0 }}>
            <Tldraw />
        </div>
    )
}

export default Canvas