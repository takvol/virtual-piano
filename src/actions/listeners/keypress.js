import * as keyboardTypes from 'src/store/types/keyboard'
import { keyboardMap, codesMapForOctaves } from 'src/constants/keycodes'

import store from 'src/store'

document.addEventListener('keydown', keydown)
document.addEventListener('keyup', keyup)

let activeOctave = 3
let keyCodesPressed = new Set()
let keyCodePayload = new Map()

function keydown (e) {
  if (e.target.tagName.toLowerCase() === 'input') return

  let code = e.code

  if (!code) return

  if (keyCodesPressed.has(code)) {
    return
  }

  if (codesMapForOctaves[code]) {
    e.preventDefault()
    e.stopPropagation()
    activeOctave = codesMapForOctaves[code]
    console.log(activeOctave)
    return
  }

  keyCodesPressed.add(code)

  const note = keyboardMap[code]
  console.log(code, note)

  if (!note) return

  e.preventDefault()
  e.stopPropagation()

  const copyNote = { ...note }

  copyNote.octaveId = note.octaveTranspose + activeOctave

  const time = Date.now()
  const payload = {
    ...copyNote,
    time,
    id: 'key-ssesion:' + (Math.random() * time)
  }

  keyCodePayload.set(code, payload)

  store.commit(keyboardTypes.KEYDOWN, payload)
}

function keyup (e) {
  const code = e.code

  if (!code) return

  if (codesMapForOctaves[code]) {
    e.preventDefault()
    e.stopPropagation()
    return
  }

  keyCodesPressed.delete(code)

  const note = keyboardMap[code]

  if (!note) return

  e.preventDefault()
  e.stopPropagation()

  const payload = keyCodePayload.get(code)

  if (!payload) return

  store.commit(keyboardTypes.KEYUP, { ...payload, time: Date.now() })
}
