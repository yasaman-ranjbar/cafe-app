type ButtonVariant = 'primary' |'secondary' ;
type ButtonSize = 'large' |'medium' |'small' ;

export type BaseComponentsProps = {
  isDisabled?: boolean;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};