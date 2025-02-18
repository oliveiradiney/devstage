import { Mail } from 'lucide-react'
import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {}
export default function Input(props: InputProps) {
  return (
    <div>
      <span>
        <Mail />
      </span>
      <input className='' {...props} />
    </div>
  )
}
