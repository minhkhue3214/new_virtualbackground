import ThumbnailButton from './TumbnailButton'

type ImageButtonProps = {
  imageUrl: string
  isActive: boolean
  onClick: () => void
}

function ImageButton(props: ImageButtonProps) {
  return (
    <ThumbnailButton
      thumbnailUrl={props.imageUrl}
      isActive={props.isActive}
      onClick={props.onClick}
    />
  )
}

export default ImageButton