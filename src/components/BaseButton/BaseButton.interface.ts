export type ButtonVariant = 'solid' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonColor = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'danger'

export interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  color?: ButtonColor
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}
