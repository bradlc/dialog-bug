import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function Thing() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Overlay
          style={{
            position: 'fixed',
            background: 'rgb(255 0 0 / 0.1)',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        Hello world
      </Dialog>
    </>
  )
}
