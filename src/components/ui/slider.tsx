import { Slider as ChakraSlider, HStack } from "@chakra-ui/react"
import * as React from "react"

export interface SliderProps extends ChakraSlider.RootProps {
  marks?: Array<number | { value: number; label: React.ReactNode }>
  label?: React.ReactNode
  showValue?: boolean
}

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  function Slider(props, ref) {
    const { marks: marksProp, label, showValue, ...rest } = props
    const value = props.defaultValue ?? props.value // Default value or controlled value

    // Normalize marks to handle both numeric and labeled marks
    const marks = marksProp?.map((mark: number) => {
      if (typeof mark === "number") return { value: mark, label: undefined }
      return mark
    })

    // Determine if any mark has a label
    const hasMarkLabel = !!marks?.some(
      (mark: number | { value: number; label?: React.ReactNode }) =>
        typeof mark !== "number" && mark.label
    )

    return (
      <ChakraSlider.Root ref={ref} thumbAlignment="center" {...rest}>
        {label && !showValue && (
          <ChakraSlider.Label>{label}</ChakraSlider.Label>
        )}
        {label && showValue && (
          <HStack justify="space-between">
            <ChakraSlider.Label>{label}</ChakraSlider.Label>
            <ChakraSlider.ValueText />
          </HStack>
        )}
        <ChakraSlider.Control data-has-mark-label={hasMarkLabel || undefined}>
          <ChakraSlider.Track>
            <ChakraSlider.Range />
          </ChakraSlider.Track>
          {/* Render thumbs with the value prop */}
          <SliderThumbs value={value} />
          {/* Render marks if they exist */}
          <SliderMarks marks={marks} />
        </ChakraSlider.Control>
      </ChakraSlider.Root>
    )
  },
)

function SliderThumbs(props: { value?: number[] }) {
  const { value } = props

  return (
    <>
      {/* Render each thumb based on value */}
      {value?.map((val, index) => (
        <ChakraSlider.Thumb key={index} value={val} />
      ))}
    </>
  )
}

// Marks Component
interface SliderMarksProps {
  marks?: Array<number | { value: number; label: React.ReactNode }>
}

const SliderMarks = React.forwardRef<HTMLDivElement, SliderMarksProps>(
  function SliderMarks(props, ref) {
    const { marks } = props
    if (!marks?.length) return null // Return null if no marks

    return (
      <ChakraSlider.MarkerGroup ref={ref}>
        {marks.map((mark, index) => {
          const value = typeof mark === "number" ? mark : mark.value
          const label = typeof mark === "number" ? undefined : mark.label
          return (
            <ChakraSlider.Marker key={index} value={value}>
              <ChakraSlider.MarkerIndicator />
              {label}
            </ChakraSlider.Marker>
          )
        })}
      </ChakraSlider.MarkerGroup>
    )
  },
)

