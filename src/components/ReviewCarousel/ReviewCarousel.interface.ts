export interface Review {
  name: string
  rating: number
  text: string
}

export interface ReviewsSliderProps {
  reviews: Review[]
  title?: string
  score?: string
}
