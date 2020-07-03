import { pureNotesId } from './notes'
import * as notes from './notes'

/* eslint-disable */
export const keyCodesFor1Octave = [49/*1*/, 50/*2*/, 51/*3*/, 52/*4*/, 53/*5*/, 54/*6*/, 55/*7*/]
export const keyCodesFor2Octave = [56/*8*/, 57/*9*/, 48/*0*/, 81/*q*/, 87/*w*/, 69/*e*/, 82/*r*/]
export const keyCodesFor3Octave = [84/*t*/, 89/*y*/, 85/*u*/, 73/*i*/, 79/*o*/, 80/*p*/, 65/*a*/]
export const keyCodesFor4Octave = [83/*s*/, 68/*d*/, 70/*f*/, 71/*g*/, 72/*h*/, 74/*j*/, 75/*k*/]
export const keyCodesFor5Octave = [76/*l*/, 90/*z*/, 88/*x*/, 67/*c*/, 86/*v*/, 66/*b*/, 78/*n*/]
export const keyCodesFor6Octave = [77/*m*/]
/* eslint-enable */
export const codesMapForOctaves = {'F1': 1, 'F2': 2, 'F3': 3, 'F4': 4, 'F5': 5, 'F6': 6}

export const keyboardMap = {
  ShiftLeft: { noteId: notes.B_ID, octaveTranspose: -1 },

  KeyZ: { noteId: notes.C_ID, octaveTranspose: 0 },
  KeyS: { noteId: notes.C_D_ID, octaveTranspose: 0 },
  KeyX: { noteId: notes.D_ID, octaveTranspose: 0 },
  KeyD: { noteId: notes.D_D_ID, octaveTranspose: 0 },
  KeyC: { noteId: notes.E_ID, octaveTranspose: 0 },
  KeyV: { noteId: notes.F_ID, octaveTranspose: 0 },
  KeyG: { noteId: notes.F_D_ID, octaveTranspose: 0 },
  KeyB: { noteId: notes.G_ID, octaveTranspose: 0 },
  KeyH: { noteId: notes.G_D_ID, octaveTranspose: 0 },
  KeyN: { noteId: notes.A_ID, octaveTranspose: 0 },
  KeyJ: { noteId: notes.A_D_ID, octaveTranspose: 0 },
  KeyM: { noteId: notes.B_ID, octaveTranspose: 0 },
  Tab: { noteId: notes.B_ID, octaveTranspose: 0 },

  Comma: { noteId: notes.C_ID, octaveTranspose: 1 },
  KeyL: { noteId: notes.C_D_ID, octaveTranspose: 1 },
  Period: { noteId: notes.D_ID, octaveTranspose: 1 },
  Semicolon: { noteId: notes.D_D_ID, octaveTranspose: 1 },
  Slash: { noteId: notes.E_ID, octaveTranspose: 1 },
  ShiftRight: { noteId: notes.F_ID, octaveTranspose: 1 },

  KeyQ: { noteId: notes.C_ID, octaveTranspose: 1 },
  Digit2: { noteId: notes.C_D_ID, octaveTranspose: 1 },
  KeyW: { noteId: notes.D_ID, octaveTranspose: 1 },
  Digit3: { noteId: notes.D_D_ID, octaveTranspose: 1 },
  KeyE: { noteId: notes.E_ID, octaveTranspose: 1 },
  KeyR: { noteId: notes.F_ID, octaveTranspose: 1 },
  Digit5: { noteId: notes.F_D_ID, octaveTranspose: 1 },
  KeyT: { noteId: notes.G_ID, octaveTranspose: 1 },
  Digit6: { noteId: notes.G_D_ID, octaveTranspose: 1 },
  KeyY: { noteId: notes.A_ID, octaveTranspose: 1 },
  Digit7: { noteId: notes.A_D_ID, octaveTranspose: 1 },
  KeyU: { noteId: notes.B_ID, octaveTranspose: 1 },

  KeyI: { noteId: notes.C_ID, octaveTranspose: 2 },
  Digit9: { noteId: notes.C_D_ID, octaveTranspose: 2 },
  KeyO: { noteId: notes.D_ID, octaveTranspose: 2 },
  Digit0: { noteId: notes.D_D_ID, octaveTranspose: 2 },
  KeyP: { noteId: notes.E_ID, octaveTranspose: 2 },
  BracketLeft: { noteId: notes.F_ID, octaveTranspose: 2 },
  Equal: { noteId: notes.F_D_ID, octaveTranspose: 2 },
  BracketRight: { noteId: notes.G_ID, octaveTranspose: 2 },
  Backspace: { noteId: notes.G_D_ID, octaveTranspose: 2 },
  Backslash: { noteId: notes.A_ID, octaveTranspose: 2 }
}

export const keyCodesAllOctaves = [
  keyCodesFor1Octave,
  keyCodesFor2Octave,
  keyCodesFor3Octave,
  keyCodesFor4Octave,
  keyCodesFor5Octave,
  keyCodesFor6Octave
]

export const mapKeyCodeToNoteIdOctaveId = keyCodesAllOctavesToMap(keyCodesAllOctaves)

// helpers

function keyCodesAllOctavesToMap (arrayOfArraysKeyCodes) {
  return arrayOfArraysKeyCodes.reduce(
    (map, arrayKeyCodes, i) => ({
      ...map,
      ...keyCodesForOneOctaveToMap(arrayKeyCodes, i + 1)
    }),
    {}
  )
}

function keyCodesForOneOctaveToMap (keyCodes, octaveId) {
  return keyCodes.reduce(
    (map, keyCode, i) => ({
      ...map,
      [keyCode]: {
        noteId: pureNotesId[i],
        octaveId
      }
    }),
    {}
  )
}
