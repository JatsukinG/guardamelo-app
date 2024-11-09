import { atom } from 'recoil'

const showAddProjectStatus = atom<boolean>({
  key: 'showAddProjectStatus',
  default: false,
})

export default showAddProjectStatus