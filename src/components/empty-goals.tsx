import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'

import logo from '../assets/logo-in-orbit.svg'
import letsStart from '../assets/let-start-illustrator.svg'

export function EmptyGoals() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="in.orbit" />
      <p className="max-w-80 text-center text-zinc-300 leading-relaxed">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar metas
        </Button>
      </DialogTrigger>
    </div>
  )
}
